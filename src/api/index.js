import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const fetchLatestArticles = () => axios.get(baseUrl + "/viewArticles");
export const registerUser = (user) => axios.post(baseUrl + "/register", user);
export const sendEmailForResetPassword = (email) => axios.post(baseUrl + "/reset-password", { email: email });
export const loginUser = (details) => axios.post(baseUrl + "/login", details);
export const saveArticle = (userId, article) => axios.post(baseUrl + "/saveArticle", { userId: userId, article: article });
export const deleteArticle = (userId, articleId) => axios.delete(baseUrl + "/deleteSavedArticle", { data: { userId: userId, articleId: articleId } });
export const getSavedArticles = (userId) => {
    return axios.get(baseUrl + "/" + userId + "/getSavedArticles");
}
export const fetchUsers = () => {
    return axios.get(baseUrl + "/admin/getUsers");
}
export const deleteUser = (username) => {
    return axios.delete(baseUrl + "/admin/deleteUser/" + username);
} 
export const updateNewPassword = (password, token) => {
    console.log(token)
    axios.post(baseUrl + "/update-password", {
        password: password,
        token: token
    }).then(data => console.log(data));
}
export const updateUserDetails = (details) => {
    return axios.post(baseUrl + "/updateUserDetails", {
        userId: details.userId,
        name: details.name,
        collegeName: details.college,
        yearOfGraduation: details.year
    });
}
