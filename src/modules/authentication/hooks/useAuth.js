import { useNavigate } from "react-router-dom";
import { showSuccess } from "../../../utility/methods.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useFetchData } from "../../../hooks/useFetchData.js";
import { login } from "../../../api/login/index.js";

const useAuth = () => {
  const [loginBody, setLoginBody] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //! Login
  const handleLogin = (values) => {
    console.log("values", values);
    const { email, password } = values;
    setLoginBody(values);
  };

  const successCallback = (data, key) => {
    switch (key) {
      case "login":
        console.log("data", data);
        showSuccess("Login Successful");
        navigate("/dashboard");
        dispatch({
          type: "SET_USER_DETAILS",
          accessToken: data.token,
          refreshToken: data.token,
          userDetails: data.user,
        });

        break;
    }
  };
  //! Login
  const [{ isLoading }] = useFetchData({
    apiFunction: login,
    dependencyArray: [loginBody],
    apiParams: loginBody,
    apiCallCondition: Object.keys(loginBody).length,
    showSuccessMessage: true,
    showErrorMessage: true,
    successCallback: (data) => successCallback(data, "login"),
  });

  return [{}, { handleLogin }];
};

export default useAuth;
