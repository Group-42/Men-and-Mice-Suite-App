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
} from "../actions/types";

const INITIAL_STATE = {
    ipRange: '',
    domain: '',
    ttl: '',
    recordType: '',
    nextIP: '',
    fetching: false,
    isPosting: false,
    user: [],
    fetchError: '',
    postError: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case IP_RANGE_CHANGED:
            return {...state, ipRange: action.payload};
        case DOMAIN_NAME_CHANGED:
            return {...state, domain: action.payload};
        case TTL_CHANGED:
            return {...state, ttl: action.payload};
        case RECORD_TYPE_CHANGED:
            return {...state, recordType: action.payload};
        case FETCHING_NEXT_IP:
            return {...state, fetching: true, fetchError: ''};
        case FETCHING_NEXT_IP_SUCCESS:
            return {...state, fetching: false, nextIP: action.payload, fetchError: ''};
        case FETCHING_NEXT_IP_FAIL:
            return {...state, fetchError: 'Something went wrong', fetching: false};
        case POSTING_DNS_RECORD:
            return {...state, isPosting: true, postError: ''};
        case POSTING_DNS_RECORD_SUCCESS:
            return {...state, isPosting: false, postError: ''};
        case POSTING_DNS_RECORD_FAIL:
            return {...state, isPosting: false, postError: 'Something went wrong while posting'};
        default:
            return state;
    }
}