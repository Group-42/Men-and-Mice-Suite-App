/*
    PingActions.js

    Contains all the functions needed to perform a Ping query
 */

import { AsyncStorage } from "react-native";
import axios from 'axios';
import {PING_DOMAIN_CHANGED, PING_FAIL, PING_SUCCESSS, PINGING} from "./types";

export const pingDomainChanged = (text) => {
    return {
        type: PING_DOMAIN_CHANGED,
        payload: text
    };
};

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

export const performPing = (domain) => {
    let serverName = '';
    let username = '';
    let password = '';

    return async (dispatch) => {
        dispatch({type: PINGING});

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

const pingSuccess = (response) => {
    return {
        type: PING_SUCCESSS,
        payload: response
    };
};

const pingFail = () => {
    return {
        type: PING_FAIL
    };
};