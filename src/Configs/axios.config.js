import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://app1.crazzyhub.com",
});

axiosInstance.interceptors.request.use((config) => {
  const Authorization = "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj";
  const Token = localStorage.getItem("token");
  config.headers = { Authorization, Token, ...config.headers };
  return config;
});
