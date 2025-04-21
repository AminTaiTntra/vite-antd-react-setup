import { Formik } from "formik";
import loginSchema from "./loginSchema";
import { CustomControlledInput } from "../../../core/components/common";
import { Button } from "antd";
import { showSuccess } from "../../../utility/methods.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getInitialState = () => ({
    email: "",
    password: "",
    rememberMe: true,
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    if (email === 'admin@gmail.com' && password === 'admin123') {
      showSuccess('Login Successful');
      navigate('/dashboard');
      dispatch({
        type: 'SET_USER_DETAILS',
        accessToken: Math.random().toString(36).substring(2, 15),
        refreshToken: Math.random().toString(36).substring(2, 15),
        username: email,
        userDetails: {
          email,
          name: 'Admin User',
        },
      });
    } else {
      showSuccess('Login Failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left side - Welcome message */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#8338ec] text-white w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg text-center max-w-xs">
            Log in to your dashboard and manage your work seamlessly.
          </p>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <Formik
            validateOnBlur
            validateOnChange
            validationSchema={loginSchema}
            initialValues={getInitialState()}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              setFieldTouched,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Login</h2>

                <CustomControlledInput
                  type="text"
                  size="large"
                  label="Email Address"
                  value={values?.email}
                  name="email"
                  isRequired={true}
                  placeholder="admin@gmail.com"
                  onChange={(e) => {
                    setFieldTouched("email");
                    setFieldValue("email", e?.target?.value ?? "");
                  }}
                  showError={errors?.email && touched?.email}
                  error={errors?.email}
                  style={{ width: "100%" }}
                />

                <CustomControlledInput
                  type="password"
                  size="large"
                  label="Password"
                  value={values?.password}
                  name="password"
                  isRequired={true}
                  placeholder="admin123"
                  onChange={(e) => {
                    setFieldTouched("password");
                    setFieldValue("password", e?.target?.value ?? "");
                  }}
                  showError={errors?.password && touched?.password}
                  error={errors?.password}
                  style={{ width: "100%" }}
                />

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full bg-[#8338ec] hover:bg-[#6f2ec4]"
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
