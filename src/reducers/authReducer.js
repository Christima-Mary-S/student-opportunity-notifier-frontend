import isEmpty from "is-empty";

import { USER_LOADING, SET_CURRENT_USER } from "../actions/actionTypes.js";

const initialState = {
    isUserAuthenticated: false,
    user: {},
    isUserLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: return {
            ...state,
            isUserAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }
        case USER_LOADING: return {
            ...state,
            isUserLoading: true
        };
        default: return state;
    }
}

export default authReducer;