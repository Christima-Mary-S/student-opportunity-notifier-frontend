import isEmpty from "is-empty";

import { SET_ADMIN, UNSET_ADMIN, SET_CURRENT_USER } from "../actions/actionTypes.js";

const initialState = {
    isUserAuthenticated: false,
    user: {},
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: return {
            ...state,
            isUserAuthenticated: !isEmpty(action.payload),
            user: action.payload
        };
        case SET_ADMIN: return {
            ...state,
            isAdmin: true
        };
        case UNSET_ADMIN: return {
            ...state,
            isAdmin: false
        };
        default: return state;
    }
}

export default authReducer;