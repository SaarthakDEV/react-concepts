import axios from "axios";

const myHttp = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

myHttp.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer token`;
  return config;
});

myHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 400) {
      return Promise.reject(new Error("Something went wrong"));
    }

    return Promise.reject(error);
  },
);

export default myHttp;


// Custom Alternative

export const createHttpClient = (
  token,
  customHeaders = {},
  errorMessages = {}
) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customHeaders,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;

      const message =
        errorMessages[status] ||
        error.response?.data?.message ||
        "Something went wrong";

      return Promise.reject(new Error(message));
    }
  );

  return instance;
};