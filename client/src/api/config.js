import axios from "axios";

import AuthService from "../services/authService";
import { unathorized } from "../store/reducers/authReducer";
import { store } from "../store";

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      return AuthService.refreshToken().then((response) => {
        if (response.response?.status === 400) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          store.dispatch(unathorized());
          return;
        }
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return api(error.config);
      });
    }
    return error;
  }
);

export default api;
