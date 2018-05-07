/*
    AllocateActions.js

    Contains all functions that is needed to allocate IP address and create DNS records
    Used in Allocate.js
 */
import { AsyncStorage } from "react-native";
import axios from 'axios';
import {
    IP_RANGE_CHANGED,
    FETCHING_NEXT_IP,
    FETCHING_NEXT_IP_SUCCESS,
    FETCHING_NEXT_IP_FAIL,
    POSTING_DNS_RECORD,
    POSTING_DNS_RECORD_SUCCESS,
    POSTING_DNS_RECORD_FAIL,
    RECORD_TYPE_CHANGED,
    DOMAIN_NAME_CHANGED,
    TTL_CHANGED,
} from "./types";

// returns an action when text in IP range text field changes
export const ipRangeChanged = (text) => {
    return {
        type: IP_RANGE_CHANGED,
        payload: text
    };
};

export const domainNameChanged = (domainName) => {
    return {
        type: DOMAIN_NAME_CHANGED,
        payload: domainName
    };
};

export const ttlChanged = (ttl) => {
    return {
        type: TTL_CHANGED,
        payload: ttl
    };
};

export const recordTypeChanged = (type) => {
    return {
        type: RECORD_TYPE_CHANGED,
        payload: type
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

// makes a GET request to the API to get the next free IP address and dispatches the appropriate actions
export const nextFreeAddress = (ipRange)  => {
    let serverName = '';
    let username = '';
    let password = '';

    return async (dispatch) => {
        dispatch({type: FETCHING_NEXT_IP});// start spinner for fetching data

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
        });

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
        }).catch(() => {
            dispatch(getNextIpFail());
        });
    };
};

// returns an action with the next free IP address
const getNextIpSuccess = (nextIP) => {
    return {
        type: FETCHING_NEXT_IP_SUCCESS,
        payload: nextIP
    };
};

// returns an action with a error message
const getNextIpFail = () => {
    return {
        type: FETCHING_NEXT_IP_FAIL
    };
};

// makes a POST request to the API for creating a new DNS record, and dispatches the appropriate actions
export const createDNSRecord = ({domain, ttl, recordType, nextIP}) => {
    let serverName = '';
    let username = '';
    let password = '';

    return async (dispatch) => {
        dispatch({type: POSTING_DNS_RECORD});// start spinner for fetching data

        await getUserInfo().then((info) => {
            serverName = info[0];
            username = info[1];
            password = info[2];
        });

        await axios.post('http://' + serverName + '/mmws/api/DNSZones/' + domain + '/DNSRecords', {
            "dnsRecord": {
                "name": null,
                "type": recordType,
                "ttl": ttl,
                "data": nextIP
            }},{
            header: {
                'content-type': 'application/json'
            },
            auth: {
                username: username,
                password: password
            }
        }).then((response) => {
            console.log('CREATE DNS RECORD RESP:', response);
            dispatch(createDNSRecordSuccess());
            return response;
        }).catch((error) => {
            console.log('CREATE DNS RECORD ERROR:', error);
            dispatch(createDNSRecordFail());
        })
    };
};

// returns an action to stop a spinner
const createDNSRecordSuccess = () => {
    return {
        type: POSTING_DNS_RECORD_SUCCESS
    };
};

// returns an action to stop a spinner and send an error message
const createDNSRecordFail = () => {
    return {
        type: POSTING_DNS_RECORD_FAIL
    };
};