/*
    reducers/index.js

    Combines all reducers into one export statement and gives them a new more useful name
 */
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import SelectionReducer from './SelectionReducer';
import CategoryReducer from './CategoryReducer'
import HealthStatusReducer from "./HealthStatusReducer";
import PingReducer from "./PingReducer";
import AllocateReducer from "./AllocateReducer";

export default combineReducers({
    auth: AuthReducer,
    libraries: CategoryReducer,
    test: CategoryReducer,
    selectedCategory: SelectionReducer,
    healthStatus: HealthStatusReducer,
    ping: PingReducer,
    allocateIP: AllocateReducer,
});