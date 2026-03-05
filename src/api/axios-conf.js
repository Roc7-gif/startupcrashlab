// services/api.js
import axios from "axios"
import { useAuthStore } from "../store/authStore"

const api = axios.create({
  baseURL: "https://startupcrashlab.pythonanywhere.com/api",
})

let isRefreshing = false
let refreshSubscribers = []

function subscribeTokenRefresh(callback) {
  refreshSubscribers.push(callback)
}

function onRefreshed(newToken) {
  refreshSubscribers.forEach((callback) => callback(newToken))
  refreshSubscribers = []
}

/* ===========================
   REQUEST INTERCEPTOR
=========================== */

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().access

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* ===========================
   RESPONSE INTERCEPTOR
=========================== */

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Si pas 401 → erreur normale
    if (error.response?.status !== 401) {
      return Promise.reject(error)
    }

    // Si déjà retry → logout
    if (originalRequest._retry) {
      useAuthStore.getState().logout()
      return Promise.reject(error)
    }

    originalRequest._retry = true

    const refreshToken = useAuthStore.getState().refresh

    if (!refreshToken) {
      useAuthStore.getState().logout()
      return Promise.reject(error)
    }

    /* ===========================
       REFRESH TOKEN LOGIC
    =========================== */

    if (!isRefreshing) {
      isRefreshing = true

      try {
        const response = await axios.post(
          "/auth/refresh",
          { refresh: refreshToken }
        )

        const newAccess = response.data.access
        const newRefresh = response.data.refresh

        useAuthStore.getState().setAccess(newAccess)
        useAuthStore.getState().setRefresh(newRefresh)

        isRefreshing = false
        onRefreshed(newAccess)
      } catch (err) {
        isRefreshing = false
        useAuthStore.getState().logout()
        return Promise.reject(err)
      }
    }

    // Attendre le nouveau token
    return new Promise((resolve) => {
      subscribeTokenRefresh((newToken) => {
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        resolve(api(originalRequest))
      })
    })
  }
)

export default api