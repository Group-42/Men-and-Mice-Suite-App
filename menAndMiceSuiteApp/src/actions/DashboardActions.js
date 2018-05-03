/*
    DashboardActions.js

    Contains all functions that dashboard will use
 */
import {AsyncStorage} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import axios from 'axios';
import {
    SELECT_CATEGORY,
    SELECT_SUBCATEGORY,
    GET_HEALTH_STATUS_SUCCESS,
    GETTING_HEALTH_STATUS_FAIL,
    GETTING_HEALTH_STATUS,
    FETCHING_USER_INFO_SUCCESS,
    BEEN_CLICKED
} from './types';

export const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        payload: categoryId
    };
};

export const selectSubcategory = (subcategoryData) => {

    return (dispatch) => {
        dispatch({
            type: SELECT_SUBCATEGORY,
            payload: subcategoryData
        });
        console.log(subcategoryData);
        if(subcategoryData.status !== 'ok') {
            Actions.main({type: ActionConst.RESET});
            Actions.dashDetail();
        }
        else {
            Actions.dashDetailOk()
        }
    };
};

export const backButtonPushed = () => {
    return (dispatch) => {
        dispatch({
            type: BEEN_CLICKED
        });
        Actions.pop();
    };
};

export const getUserInfo = async() => {
    let serverName = '';
    let username = '';
    let password = '';

    await AsyncStorage.getItem('@MMStorage:serverName')
        .then(data => {
            serverName = data;
        });
    await AsyncStorage.getItem('@MMStorage:user')
        .then(data => {
            username = data;
        });
    await AsyncStorage.getItem('@MMStorage:password')
        .then(data => {
            password = data;
        });

    return [serverName, username, password];
};

export const getHealthStatusBar = () => {
    let serverName;
    let username;
    let password;

    return async (dispatch) => {
        dispatch({type: GETTING_HEALTH_STATUS}); // start spinner for fetching data
        dispatch({type: BEEN_CLICKED}); // resets SELECT_SUBCATEGORY variables

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
            dispatch({type: FETCHING_USER_INFO_SUCCESS, payload: info});
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
        }).then(async response => {
            await AsyncStorage.setItem('@MMStorage:serialNumber', response.data.result.healthStatusBar.serialNumber);
            dispatch(getDataSuccess(response.data.result.healthStatusBar.healthData));
        }).catch((error) => {
            console.log('GET error', error);
            dispatch(getDataFail());
        });
    };
};

export function getDataSuccess(data) {
    console.log('getDataSuccess:', data);
    return {
        type: GET_HEALTH_STATUS_SUCCESS,
        payload: data
    }
}

export function getDataFail() {
    return {type: GETTING_HEALTH_STATUS_FAIL}
}