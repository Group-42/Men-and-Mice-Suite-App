import {
    SERVER_NAME_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    SPINNER_START,
    USER_LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
    serverName: '',
    username: '',
    password: '',
    user: null,
    loading: false,
    loggedIn: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERVER_NAME_CHANGED:
            return {...state, serverName: action.payload};
        case USERNAME_CHANGED:
            return {...state, username: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case USER_LOGIN_SUCCESS:
            return {...state, error: '', loading: false, user: action.payload, loggedIn: true};
        case USER_LOGIN_FAIL:
            return {...state, error: 'Authentication Failed', password: '', loading: false};
        case USER_LOGOUT:
            return {...state, password: '', loading: false, loggedIn: false};
        case SPINNER_START:
            return {...state, loading: true, error: ''};
        default:
            return state;
    }
}