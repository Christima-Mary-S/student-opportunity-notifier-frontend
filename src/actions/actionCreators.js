import * as api from "../api/index.js";
import { GET_LATEST_ARTICLES, GET_ERRORS, SET_CURRENT_USER, SET_ADMIN, UNSET_ADMIN, SAVE_ARTICLE, GET_USERS } from "../actions/actionTypes.js"
import { setAuthToken } from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";
import { GET_SAVED_ARTICLES, DELETE_ARTICLE, DELETE_USER, CLEAR_ERRORS, MODIFY_USER } from './actionTypes';

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

export const clearErrors = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_ERRORS });
    }
}

export const register = (user, history) => {
    return async (dispatch) => {
        try {
            const { data } = await api.registerUser(user);
            history.push("/login");
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            });
        }
    }
}

export const login = (details, history) => {
    return async (dispatch) => {
        try {
            const { data } = await api.loginUser(details);
            const token = data.token;
            setAuthToken(token);
            localStorage.setItem("jwtToken", token);
            localStorage.removeItem("modified");
            const userData = jwtDecode(token);
            console.log("data", userData)
            dispatch({
                type: SET_CURRENT_USER,
                payload: userData
            });
            if (userData.username === "admin") {
                dispatch({
                    type: SET_ADMIN
                });
                history.push("/admin");
            } else {
                history.push("/dashboard");
            }
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            });
        }
    }
}

export const logout = (history) => {
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
        history.push("/login");
    }
}

export const updateUser = (details) => {
    return async (dispatch) => {
        try {
            const { data } = await api.updateUserDetails(details);
            console.log(data.user)
            dispatch({ 
                type: MODIFY_USER,
                payload: data.user
            })
            localStorage.setItem("modified", "true");
        } catch (error) {
            console.log(error)
        }
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

export const deleteArticle = (userId, articleId) => {
    return async (dispatch) => {
        try {
            const { data } = await api.deleteArticle(userId, articleId);
            console.log(data)
            dispatch({
                type: DELETE_ARTICLE,
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
            dispatch({ type: GET_SAVED_ARTICLES, payload: data.articles });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.fetchUsers();
            dispatch({ type: GET_USERS, payload: data });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const deleteUser = (username) => {
    return async (dispatch) => {
        try {
            const { data } = await api.deleteUser(username);
            dispatch({ type: DELETE_USER, payload: username });
        } catch (error) {
            console.log(error.message);
        }
    }
}