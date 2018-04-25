import {
    IP_RANGE_CHANGED,
    FETCHING_NEXT_IP,
    FETCHING_NEXT_IP_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    ipRange: '',
    nextIP: '',
    fetching: false,
    user: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IP_RANGE_CHANGED:
            return {...state, ipRange: action.payload};
        case FETCHING_NEXT_IP:
            return {...state, fetching: true};
        case FETCHING_NEXT_IP_SUCCESS:
            return {...state, fetching: false, nextIP: action.payload};
        default:
            return state;
    }
}