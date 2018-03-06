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

//### OTHER
export const SPINNER_START = 'spinner_start';