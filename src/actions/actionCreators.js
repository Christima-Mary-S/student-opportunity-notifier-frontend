import * as api from "../api/index.js";
import { GET_LATEST_ARTICLES } from "../actions/actionTypes.js"

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