import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import generalReducer from "./generalReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
    general: generalReducer,
    auth: authReducer,
    errors: errorsReducer,
    admin: adminReducer
});
