const endpoints = {
  common: {
    changePassword: "/user/change-password/",
    forgetPasswrod: "/user/reset-password/",
    login: "/user/login/",
    getLoggedInUser: "/employee/logged-employee/",
    refreshToken: "/user/token/refresh/",
    getCurrentUserDetails: "/employee/current-user-details/",
    resetPassword: (body) =>
      `/user/confirm-reset-password/${body?.uid}/${body?.token}/`,
    getResetPassword: (body) =>
      `/user/confirm-reset-password/${body?.uid}/${body?.token}/`,
  },
};

export default endpoints;
