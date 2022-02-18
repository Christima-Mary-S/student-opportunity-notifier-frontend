import { combineReducers } from "redux";
import generalReducer from "./reducer";

export default combineReducers({
    general: generalReducer
});
