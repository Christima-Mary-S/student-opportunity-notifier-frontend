import isEmpty from "is-empty";
import produce from "immer";

import { SET_ADMIN, UNSET_ADMIN, SET_CURRENT_USER, SAVE_ARTICLE } from "../actions/actionTypes.js";

const initialState = {
    isUserAuthenticated: false,
    user: {
        savedArticleIds: []
    },
    isAdmin: false,
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
        case SAVE_ARTICLE: return produce(state, draft => {
            draft.user.savedArticleIds.push(action.payload);
        });
        default: return state;
    }
}

export default authReducer;