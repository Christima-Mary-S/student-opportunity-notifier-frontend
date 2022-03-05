import * as api from "../api/index.js";
import { GET_LATEST_ARTICLES, GET_ERRORS } from "../actions/actionTypes.js"

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
            const token = await api.loginUser(details);
            console.log(token);
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            }); 
        }
    }
}