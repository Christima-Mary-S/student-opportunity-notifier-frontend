import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const fetchLatestArticles = () => axios.get(baseUrl + "/viewArticles");
export const registerUser = (user) => axios.post(baseUrl + "/register", user);
