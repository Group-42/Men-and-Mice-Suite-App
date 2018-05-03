import {
    GET_HEALTH_STATUS_SUCCESS,
    GETTING_HEALTH_STATUS_FAIL,
    GETTING_HEALTH_STATUS,
    FETCHING_USER_INFO,
    FETCHING_USER_INFO_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    data: [],
    user: [],
    isFetching: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GETTING_HEALTH_STATUS:
            return {...state, isFetching: true, error: ''};

        case GET_HEALTH_STATUS_SUCCESS:
            return {...state, data: action.payload, isFetching: false, error: ''};

        case GETTING_HEALTH_STATUS_FAIL:
            return {...state, isFetching: false, error: 'An error occurred'};

        case FETCHING_USER_INFO:
            return {...state, loading: true, user: [], error: ''};

        case FETCHING_USER_INFO_SUCCESS:
            return {...state, loading: false, user: action.payload};

        default:
            return state;
    }
}