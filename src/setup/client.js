import store from "./store";
import { logout, setAccessToken } from "../actions/loginAction";
import axios from "axios";
import endpoints from "../api/endpoints";
import { getBaseURL } from "../utility/apiMethods";
import API_STATUS from "./apiStatus";

const PUBLIC_ROUTES = ["login", "confirm-reset-password"];

const client = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "client-timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
});

client.defaults.timeout = 34000;

const get = (url, body, headers = {}, responseType = null) => {
  return client.get(url, { params: body, headers, responseType: responseType });
};

const post = (url, body, headers = {}) => {
  return client.post(url, body, { headers });
};

const put = (url, body, headers = {}) => {
  return client.put(url, body, { headers });
};

const patch = (url, body, headers = {}) => {
  return client.patch(url, body, { headers });
};

const del = (url, body) => {
  return client.delete(url, body);
};

client.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token = state.login.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, config, status } = error.response || {};
    if (status === API_STATUS.UNAUTHORIZED) {
      const isRefreshTokenExpired = data?.error?.refresh_token_expire;

      const isUserInactive = data?.error?.message === "User is inactive";
      const isUserNotFound = data?.error?.message === "User not found";

      if (isRefreshTokenExpired || isUserInactive || isUserNotFound) {
        store.dispatch(logout);
        localStorage.setItem("SHOW_TOAST", "true");
      } else if (!PUBLIC_ROUTES.some((route) => config.url.includes(route))) {
        const state = store.getState();
        const token = state.login.refreshToken;

        if (token) {
          return client
            .post(endpoints.common.refreshToken, { refresh: token })
            .then((res) => {
              if (
                res?.status === API_STATUS.SUCCESS ||
                res?.statusText === "OK"
              ) {
                store.dispatch(setAccessToken(res?.data));
                const authToken = state.login.accessToken;
                client.defaults.headers.common.Authorization = `Bearer ${authToken}`;
                return client(error.config);
              }
            })
            .catch((err) => {
              if (err) {
                store.dispatch(logout);
              }
            });
        }
      } else {
        store.dispatch(logout);
      }
    }
    return Promise.reject(error);
  }
);

export { get, post, put, del, patch };

export default client;
