import axios, { AxiosResponse } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const handleRequest = (promise: Promise<AxiosResponse<any>>) => {
  return promise
    .then((res) => {
      if (res.data) {
        return {
          data: res.data,
        };
      }
      return {
        error: res.data.error_text,
      };
    })
    .catch((error) => {
      return Promise.resolve({
        error: error.message || "Error occured",
        data: undefined,
      });
    });
};
