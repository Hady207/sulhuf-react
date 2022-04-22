import { create } from "apisauce";

export const api = create({ baseURL: "https://dev-api.trysedalia.com/" });

api.axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
