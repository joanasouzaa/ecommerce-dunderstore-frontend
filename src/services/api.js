import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7136/api", // 🔧 coloque a URL exata da sua API
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptador de token (caso você adicione login depois)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
