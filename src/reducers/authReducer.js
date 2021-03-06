import isEmpty from "is-empty";
import produce from "immer";

import { SET_ADMIN, UNSET_ADMIN, SET_CURRENT_USER, MODIFY_USER, SAVE_ARTICLE, DELETE_ARTICLE, GET_SAVED_ARTICLES } from "../actions/actionTypes.js";

const initialState = {
    isUserAuthenticated: false,
    user: {},
    savedArticles: [],
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
        case MODIFY_USER: return produce(state, draft => {
            draft.user.name = action.payload.name;
            draft.user.collegeName = action.payload.collegeName;
            draft.user.yearOfGraduation = action.payload.yearOfGraduation;
        });
        case SAVE_ARTICLE: return produce(state, draft => {
            draft.user.savedArticleIds.push(action.payload);
        });
        case DELETE_ARTICLE: return produce(state, draft => {
            draft.user.savedArticleIds = draft.user.savedArticleIds.filter(id => id !== action.payload);
        });
        case GET_SAVED_ARTICLES: return produce(state, draft => {
            draft.savedArticles = [];
            let articles = action.payload;
            if (!isEmpty(articles)) {
                for (const article of articles) {
                    draft.savedArticles.push(article);
                }
            }
        });
        default: return state;
    }
}

export default authReducer;