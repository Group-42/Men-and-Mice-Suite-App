/*
    AuthActions.js

    Contains all the functions needed for user authentication
 */
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {
    SERVER_NAME_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    SPINNER_START,
    USER_LOGOUT
} from "./types";

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


export const loginUser = ({serverName, username, password}) => {
    if(serverName.trim()  === '' && username.trim() === '' && password.trim() === '') {
        serverName = 'blackstar.thorlacius.com';
        username = 'administrator';
        password = 'administrator';
    }

    return(dispatch) => {
        dispatch({type: SPINNER_START});
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
        }).then(user => {
            loginUserSuccess(dispatch, user);
            setUserInfo({serverName, username, password});

        }).catch(() => loginUserFail(dispatch));
    };
};

async function setUserInfo({serverName, username, password}) {
    try {
        await AsyncStorage.setItem('@MMStorage:serverName', serverName);
        await AsyncStorage.setItem('@MMStorage:user', username);
        await AsyncStorage.setItem('@MMStorage:password', password);
    } catch (error) {
        console.log("Error setting data" + error);
    }
}

export const logoutUser = () => {
    return(dispatch) => {
        dispatch({type: USER_LOGOUT});
        removeUserInfo();
        Actions.reset('auth');
    }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: USER_LOGIN_SUCCESS, payload: user});
    console.log(user);
    Actions.main();
};

const loginUserFail = (dispatch) => {
    console.log('LOGIN USER FAILED');
    dispatch({type: USER_LOGIN_FAIL});
};

const removeUserInfo = () => {
    AsyncStorage.multiRemove(['@MMStorage:serverName','@MMStorage:username', '@MMStorage:password'])
        .then((value) => console.log('removeUserInfo: ', value));
};
