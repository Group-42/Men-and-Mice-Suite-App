import {AsyncStorage} from "react-native";
import axios from 'axios';
import {IP_RANGE_CHANGED, FETCHING_NEXT_IP, FETCHING_NEXT_IP_SUCCESS} from "./types";

export const ipRangeChanged = (text) => {
    return {
        type: IP_RANGE_CHANGED,
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

export const nextFreeAddress = (ipRange)  => {
    let serverName = '';
    let username = '';
    let password = '';

    return async (dispatch) => {
        dispatch({type: FETCHING_NEXT_IP});

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
        });
        console.log("server:", serverName);
        console.log("user:", username);
        console.log("pass:", password);
        await axios({
            method: 'GET',
            url: 'http://' + serverName + '/mmws/api/ranges/' + ipRange + '/nextfreeaddress?ping=true',
            header: {
                'content-type': 'application/json'
            },
            auth: {
                username: username,
                password: password
            }
        }).then(response => {
            dispatch(getNextIpSuccess(response.data.result.address));
        }).catch((error) => {
            console.log('GET error', error);
        });
    };
};

const getNextIpSuccess = (nextIP) => {
    return {
        type: FETCHING_NEXT_IP_SUCCESS,
        payload: nextIP
    };
};