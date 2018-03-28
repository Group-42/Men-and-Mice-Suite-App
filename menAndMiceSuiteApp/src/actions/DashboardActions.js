/*
    DashboardActions.js

    Contains all functions that dashboard will use
 */
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {
    SELECT_CATEGORY,
    GET_HEALTH_STATUS_SUCCESS,
    GETTING_HEALTH_STATUS_FAIL,
    GETTING_HEALTH_STATUS
} from './types';

export const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        payload: categoryId
    };
};

const getUserInfo = async() => {
    let serverName = '';
    let username = '';
    let password = '';

    await AsyncStorage.getItem('@MMStorage:serverName')
        .then(data => {
            serverName = data;
            console.log('testing1: ', data)
        });
    await AsyncStorage.getItem('@MMStorage:user')
        .then(data => {
            username = data;
            console.log('testing2: ', data)
        });
    await AsyncStorage.getItem('@MMStorage:password')
        .then(data => {
            password = data;
            console.log('testing3: ', data)
        });
    
    console.log('testing1.1:', serverName);
    console.log('testing2.2:', username);
    console.log('testing3.3:', password);

    return [serverName, username, password];
}

export const getHealthStatusBar = () => {
    let serverName;
    let username;
    let password;

    return async (dispatch) => {
        dispatch({type: GETTING_HEALTH_STATUS});

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
        });

        await axios({
            method: 'GET',
            url: 'http://' + serverName + '/mmws/api/command/GetHealthStatusBar?groupIntoArrays=true',
            header: {
                'content-type': 'application/json'
            },
            auth: {
                username: username,
                password: password
            }
        }).then(response => {
            dispatch(getDataSuccess(response.data.result.healthStatusBar.healthData));
        }).catch((error) => {
            console.log('GET error', error);
        });
    };
};

export function getDataSuccess(data) {
    console.log('getDataSuccess:', data);
    return {type: GET_HEALTH_STATUS_SUCCESS, payload: data}
}

export function getDataFail() {
    return {type: GETTING_HEALTH_STATUS_FAIL}
}