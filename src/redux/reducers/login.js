
const initialState = {
  accessToken: "",
  refreshToken: "",
  username: "",
  userDetails: {},
};
// eslint-disable-next-line default-param-last
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS": {
      return {
        ...state,
        accessToken: action?.accessToken,
        refreshToken: action?.refreshToken,
        username: action?.username,
        userDetails: action?.userDetails,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
