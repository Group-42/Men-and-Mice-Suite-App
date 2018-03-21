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
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GETTING_HEALTH_STATUS:
            return {...state, isFetching: true};

        case GET_HEALTH_STATUS_SUCCESS:
            return {...state, data: action.payload, isFetching: false};

        case GETTING_HEALTH_STATUS_FAIL:
            return {...state, isFetching: false, error: true};

        case FETCHING_USER_INFO:
            return {...state, loading: true, user: []};

        case FETCHING_USER_INFO_SUCCESS:
            return {...state, loading: false, user: action.payload};

        default:
            return state;
    }
}