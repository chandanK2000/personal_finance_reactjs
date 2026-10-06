
import axios from "axios";

const axiosInstance = axios.create({
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

/* ==============================
   REQUEST INTERCEPTOR
================================ */

axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

/* ==============================
   RESPONSE INTERCEPTOR
================================ */

axiosInstance.interceptors.response.use(

    // API SUCCESS
    (response) => {
        return response;
    },

    // API ERROR
    (error) => {

        const status = error.response?.status;

        /* ==============================
           TOKEN EXPIRED / INVALID
        ============================== */

     if (status === 401) {
    console.warn("🔐 Token expired or invalid");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    window.dispatchEvent(
        new Event("session-expired")
    );

    return Promise.reject(error);
}

        return Promise.reject(error);
    }
);

export default axiosInstance;