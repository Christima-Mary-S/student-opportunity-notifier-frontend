import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const fetchLatestArticles = () => axios.get(baseUrl + "/viewArticles");
export const registerUser = (user) => axios.post(baseUrl + "/register", user);
export const loginUser = (details) => axios.post(baseUrl + "/login", details);
export const saveArticle = (userId, article) => axios.post(baseUrl + "/saveArticle", {userId: userId, article: article});
export const getSavedArticles = (userId) => {
    return axios.get(baseUrl + "/" + userId + "/getSavedArticles");
}
