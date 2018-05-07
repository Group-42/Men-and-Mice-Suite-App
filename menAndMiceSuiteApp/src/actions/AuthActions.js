/*
    AuthActions.js

    Contains all the functions needed for user authentication
    Used in LoginForm.js
 */
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    SERVER_NAME_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    SPINNER_START,
    USER_LOGOUT
} from "./types";

// returns an action when text in server name text field changes
export const serverNameChanged = (text) => {
    return {
        type: SERVER_NAME_CHANGED,
        payload: text
    };
};

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// makes a GET request on users to check if the server name, username and password is correct, if they are the info is
// saved and used for all the other API calls in the app.
export const loginUser = ({serverName, username, password}) => {
    if(serverName.trim()  === '' && username.trim() === '' && password.trim() === '') {
        serverName = 'blackstar.thorlacius.com';
        username = 'administrator';
        password = 'administrator';
    }

    return(dispatch) => {
        dispatch({type: SPINNER_START});// start spinner for fetching data
        axios({
            method: 'GET',
            url: 'http://' + serverName + '/mmws/api/users/' + username,
            header: {
                'content-type': 'application/json'
            },
            auth: {
                username: username,
                password: password
            }
        }).then(async user => {
            await setUserInfo({serverName, username, password});
            loginUserSuccess(dispatch, user);

        }).catch(() => loginUserFail(dispatch));
    };
};

// saves the users info to a json file that only React Native has access to
async function setUserInfo({serverName, username, password}) {
    try {
        await AsyncStorage.setItem('@MMStorage:serverName', serverName);
        await AsyncStorage.setItem('@MMStorage:user', username);
        await AsyncStorage.setItem('@MMStorage:password', password);
    } catch (error) {
        console.log("Error setting data" + error);
    }
}

// dispatches an logout action. Removes all the saved user info from the json file and redirects the user back to the
// login screen
export const logoutUser = () => {
    return(dispatch) => {
        dispatch({type: USER_LOGOUT});
        removeUserInfo();
        Actions.reset('auth');
    }
};

// dispatches an login action that saves the user info to the state and directs the user to the main screen(dashboard)
const loginUserSuccess = (dispatch, user) => {
    dispatch({type: USER_LOGIN_SUCCESS, payload: user});
    console.log(user);
    Actions.main();
};

// dispatches an login fail action that is used to display an error message to the user
const loginUserFail = (dispatch) => {
    console.log('LOGIN USER FAILED');
    dispatch({type: USER_LOGIN_FAIL});
};

// removes the user info form the json file
const removeUserInfo = () => {
    AsyncStorage.multiRemove(['@MMStorage:serverName','@MMStorage:username', '@MMStorage:password'])
        .then((value) => console.log('removeUserInfo: ', value));
};
