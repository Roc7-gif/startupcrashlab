// services/api.js
import axios from "axios";
import { useAuthStore } from "../store/authStore";
const baseURL = "https://startupcrashlab.pythonanywhere.com/api";
const api = axios.create({
  // baseURL: "https://startupcrashlab.pythonanywhere.com/api",
  baseURL: baseURL,
});

let isRefreshing = false;
let refreshSubscribers = [];

// function subscribeTokenRefresh(callback) {
//   refreshSubscribers.push(callback);
// }

function onRefreshed(newToken) {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
}

/* ===========================
   REQUEST INTERCEPTOR
=========================== */

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().access;
    // config.headers['Content-Type'] = `application/json`

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(token);

    return config;
  },
  (error) => Promise.reject(error),
);

/* ===========================
   RESPONSE INTERCEPTOR
=========================== */

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si pas 401 → erreur normale
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }
    console.log(error.response?.status);

    // Si déjà retry → logout
    if (originalRequest._retry) {
      useAuthStore.getState().logout();
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    const refreshToken = useAuthStore.getState().refresh;
    const accessToken = useAuthStore.getState().access;
    console.log(refreshToken);

    if (!(refreshToken || accessToken)) {
      useAuthStore.getState().logout();
      return Promise.reject(error);
    }

    /* ===========================
       REFRESH TOKEN LOGIC
    =========================== */

    if (!isRefreshing) {
      isRefreshing = true;
      console.log(isRefreshing);

      try {
        const response = await axios.post(`${baseURL}/auth/refresh`, {
          refresh: refreshToken,
          access: accessToken,
        });
        while (!response.data) {
          setTimeout(() => {}, 1000);
        }

        const newAccess = response.data.access;
        console.log("newAceess", newAccess);

        useAuthStore.getState().setAccess(newAccess);

        isRefreshing = false;
        onRefreshed(newAccess);
      } catch (err) {
        isRefreshing = false;
        // useAuthStore.getState().logout();
        return Promise.reject(err);
      }
    }

    // Attendre le nouveau token
    // Attendre que le refresh soit terminé avant de retry la requête
    console.log("retry");

    return new Error("Network Error");
  },
);

export default api;
