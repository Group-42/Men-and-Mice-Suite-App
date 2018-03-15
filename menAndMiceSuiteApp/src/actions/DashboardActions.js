/*
    DashboardActions.js

    Contains all functions that dashboard will use
 */
import {SELECT_CATEGORY} from './types';

export const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        payload: categoryId
    };
};

const callGetHealthStatusBar = () => {

};