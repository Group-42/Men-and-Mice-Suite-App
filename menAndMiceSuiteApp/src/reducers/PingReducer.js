/*
    PingReducer.js

    Handles the state for ping actions
 */
import {
    PING_DOMAIN_CHANGED,
    PINGING,
    PING_SUCCESS,
    PING_FAIL
} from "../actions/types";

const INITIAL_STATE = {
    pingDomain: '',
    pinging: false,
    pingResult: '',
    pingError: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PING_DOMAIN_CHANGED:
            return { ...state, pingDomain: action.payload };
        case PINGING:
            return { ...state, pinging: true, pingError: '' };
        case PING_SUCCESS:
            return { ...state, pinging: false, pingResult: action.payload };
        case PING_FAIL:
            return { ...state, pinging: false, pingError:'Something went wrong' };
        default:
            return state;
    }
}