import * as api from "../api/index.js";
import { GET_LATEST_ARTICLES, GET_ERRORS, SET_CURRENT_USER } from "../actions/actionTypes.js"
import { setAuthToken } from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";

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
            dispatch({
                type: SET_CURRENT_USER,
                payload: data
            });
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
            const userData = jwtDecode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: userData
            });
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
        dispatch({
            type: SET_CURRENT_USER,
            payload: {}
        });
    }
}