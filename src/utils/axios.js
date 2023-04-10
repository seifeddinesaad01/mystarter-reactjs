import axios from "axios";
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
});

//request interceptor to add the auth token header to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
