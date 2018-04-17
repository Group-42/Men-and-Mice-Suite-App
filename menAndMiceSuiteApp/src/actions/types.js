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

//### DASHBOARD
export const SELECT_CATEGORY = 'selected_category';
export const SELECT_SUBCATEGORY = 'selected_subcategory';
export const FETCHING_USER_INFO = 'fetching_user_info';
export const FETCHING_USER_INFO_SUCCESS = 'fetching_user_info_success';
export const FETCHING_USER_INFO_FAIL = 'fetching_user_info_fail';

export const GET_HEALTH_STATUS_SUCCESS = 'get_appliance_health_success';
export const GETTING_HEALTH_STATUS = 'getting_appliance_health';
export const GETTING_HEALTH_STATUS_FAIL = 'get_appliance_health_fail';

//### OTHER
export const SPINNER_START = 'spinner_start';