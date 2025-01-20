import {
  SET_USER_TOKEN,
  SET_USER_NAME,
  SET_CURRENT_USER_DETAILS,
} from "../actions/login";

const initialState = {
  accessToken: "",
  refreshToken: "",
  username: "",
  userDetails: {},
};
// eslint-disable-next-line default-param-last
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return {
        ...state,
        accessToken: action?.accessToken,
        refreshToken: action?.refreshToken,
      };
    }
    case SET_USER_NAME: {
      return {
        ...state,
        username: action?.username,
      };
    }
    case SET_CURRENT_USER_DETAILS: {
      return {
        ...state,
        userDetails: action?.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
