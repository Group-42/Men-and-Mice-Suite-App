/*
    SelectionReducer.js

    Handles the state for the item expanded in the dashboard
 */
import {SELECT_CATEGORY, SELECT_SUBCATEGORY} from "../actions/types";

const INITIAL_STATE = {
    subcategoryData: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SELECT_CATEGORY:
            return action.payload;
        case SELECT_SUBCATEGORY:
            return {subcategoryData: action.payload};
        default:
            return state;
    }
};