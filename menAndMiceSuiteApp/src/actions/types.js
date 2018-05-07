/*
    types.js

    Contains all action types.
    Actions and reducers import from this file to get identical names so they can work together
 */
//### AUTHENTICATION
export const SERVER_NAME_CHANGED = 'server_name_changed';
export const USERNAME_CHANGED = 'username_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const USER_LOGIN_SUCCESS = 'user_login_success';
export const USER_LOGIN_FAIL = 'user_login_fail';
export const USER_LOGOUT = 'user_logout';
export const SPINNER_START = 'spinner_start';

//### DASHBOARD
export const SELECT_CATEGORY = 'selected_category';
export const SELECT_SUBCATEGORY = 'selected_subcategory';
export const FETCHING_USER_INFO = 'fetching_user_info';
export const FETCHING_USER_INFO_SUCCESS = 'fetching_user_info_success';
export const FETCHING_USER_INFO_FAIL = 'fetching_user_info_fail';
export const BEEN_CLICKED = 'been_clicked';

export const GET_HEALTH_STATUS_SUCCESS = 'get_appliance_health_success';
export const GETTING_HEALTH_STATUS = 'getting_appliance_health';
export const GETTING_HEALTH_STATUS_FAIL = 'get_appliance_health_fail';

//### PING
export const PING_DOMAIN_CHANGED = 'ping_domain_changed';
export const PINGING = 'pinging';
export const PING_SUCCESS = 'ping_success';
export const PING_FAIL = 'ping_fail';

//### ALLOCATE IP
export const IP_RANGE_CHANGED = 'ip_range_changed';
export const RECORD_TYPE_CHANGED = 'record_type_changed';
export const DOMAIN_NAME_CHANGED = 'domain_name_changed';
export const TTL_CHANGED = 'ttl_changed';
export const FETCHING_NEXT_IP = 'fetching_next_ip';
export const FETCHING_NEXT_IP_SUCCESS = 'fetching_next_ip_success';
export const FETCHING_NEXT_IP_FAIL = 'fetching_next_ip_fail';
export const POSTING_DNS_RECORD = 'posting_dns_record';
export const POSTING_DNS_RECORD_SUCCESS = 'posting_dns_record_success';
export const POSTING_DNS_RECORD_FAIL = 'posting_dns_record_fail';
