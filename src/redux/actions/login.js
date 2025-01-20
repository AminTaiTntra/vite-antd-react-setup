import API_STATUS from "../../setup/apiStatus";
// import { getCurrentUserDetails, login } from "../api/login/login";

export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const LOGOUT = "LOGOUT";
export const SET_USER_NAME = "SET_USER_NAME";

export const SET_CURRENT_USER_DETAILS = "SET_CURRENT_USER_DETAILS";

export const setAccessToken = (rest) => (dispatch) => {
  dispatch({
    type: SET_USER_TOKEN,
    accessToken: rest?.access,
    refreshToken: rest?.refresh,
  });
};

export const setCurrentUserImg = (data) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER_DETAILS,
    payload: data ?? {},
  });
};

export const setUserToken = (body) => (dispatch) => {
  //   login(body).then((res) => {
  //     if (res?.status === API_STATUS.SUCCESS || res?.statusText === "OK") {
  //       dispatch(setAccessToken(res?.data));
  //     }
  //     return res;
  //   });
};

export const getUserDetails = () => (dispatch) => {
  //   getCurrentUserDetails().then((res) => {
  //     if (res?.status === API_STATUS.SUCCESS || res?.statusText === "OK") {
  //       dispatch(setCurrentUserImg(res?.data?.payload));
  //     }
  //     return res;
  //   });
};

export const logout = (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};
