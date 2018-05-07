/*
    PingActions.js

    Contains all the functions needed to perform a Ping query
    Used in Ping.js
 */

import { AsyncStorage } from "react-native";
import axios from 'axios';
import {
    PING_DOMAIN_CHANGED,
    PING_FAIL,
    PING_SUCCESS,
    PINGING
} from "./types";

// returns an action when text in Ip address text field changes
export const pingDomainChanged = (text) => {
    return {
        type: PING_DOMAIN_CHANGED,
        payload: text
    };
};

// retrieves the user info from a json file that only React Native has access to
const getUserInfo = async() => {
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

// makes a POST request to the API to ping the given IP address and dispatches the appropriate actions
export const performPing = (domain) => {
    let serverName = '';
    let username = '';
    let password = '';

    return async (dispatch) => {
        dispatch({type: PINGING});// start spinner for fetching data

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
        });

        await axios.post('http://' + serverName + '/mmws/api/command/Ping', {
            "addrRef": domain
        },{
            auth: {
                username: username,
                password: password
            }
        }).then((response) => {
            console.log(response.data.result);
            dispatch(pingSuccess(response.data.result));
        }).catch((error) => {
            console.log(error);
            dispatch(pingFail());
        })
    };
};

// returns an action with the response from the performPing function
const pingSuccess = (response) => {
    return {
        type: PING_SUCCESS,
        payload: response
    };
};

// returns an action with an error message
const pingFail = () => {
    return {
        type: PING_FAIL
    };
};