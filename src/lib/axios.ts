import axios from "axios";

import Cookies from "js-cookie";
import { toast } from "sonner";
const token = Cookies.get("token");
export const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  headers: {
    "x-api-key": process.env.X_API_KEY,
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      Cookies.remove("token");
      toast.error('Forbidden', {
        description: 'Access Forbidden'
      })
    }
    return Promise.reject(error);
  }
);