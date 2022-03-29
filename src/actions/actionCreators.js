import * as api from "../api/index.js";
import { GET_LATEST_ARTICLES, GET_ERRORS, SET_CURRENT_USER, SET_ADMIN, UNSET_ADMIN, SAVE_ARTICLE } from "../actions/actionTypes.js"
import { setAuthToken } from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";
import { GET_SAVED_ARTICLES } from './actionTypes';

export const getLatestArticles = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.fetchLatestArticles();
            dispatch({ type: GET_LATEST_ARTICLES, payload: { articles: data } });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const register = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await api.registerUser(user);
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            });
        }
    }
}

export const login = (details) => {
    return async (dispatch) => {
        try {
            const { data } = await api.loginUser(details);
            const token = data.token;
            setAuthToken(token);
            localStorage.setItem("jwtToken", token);
            const userData = jwtDecode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: userData
            }); 
            if (userData.username === "admin") {
                dispatch({
                    type: SET_ADMIN
                }); 
            }
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            });
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        setAuthToken(false);
        localStorage.removeItem("jwtToken");
        dispatch({
            type: SET_CURRENT_USER,
            payload: {}
        });
        dispatch({
            type: UNSET_ADMIN
        });
    }
}

export const saveArticle = (userId, article) => {
    return async (dispatch) => {
        try {
            const { data } = await api.saveArticle(userId, article);
            dispatch({
                type: SAVE_ARTICLE,
                payload: data.articleId
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSavedArticles = (userId) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getSavedArticles(userId);
            console.log(data);
            dispatch({ type: GET_SAVED_ARTICLES, payload: data.articles });
        } catch (error) {
            console.log(error.message);
        }
    }
} 