import axios from "axios";

export const API_URL = "http://localhost:5000/api";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default api;
