import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 3000,
});

// 请求拦截
instance.interceptors.request.use(async function (config) {
  config.headers["app"] = "AIM";
  config.headers["app-build"] = 20220419;
  config.headers["app-ver"] = "V1.1.1";
  config.headers["access-token"] = `${localStorage.getItem("token")}`;
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
instance.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data;
    if (code === -10005) {
      window.location.replace("/login");
    }
    return response.data;
  },
  (error) => Promise.reject(error)
);
export default instance;
