import { Formik } from "formik";
import loginSchema from "./loginSchema";
import { CustomControlledInput } from "../../../core/components/common";
import { Alert, Button, Col, Row } from "antd";
import { showSuccess } from "../../../utility/methods.js";
import { useNavigate } from "react-router-dom";
import loginReducer from "../../../redux/reducers/login.js";
import { useDispatch } from "react-redux";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getInitialState = () => {

    const defaultValues = {
      email: "",
      password: "",
      rememberMe: true,
    };
    return defaultValues;
  }

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    const { email, password } = values;
    if(email === 'admin@gmail.com' && password === 'admin123') {
      showSuccess('Login Successful');
      navigate('/dashboard');
      dispatch({
        type: 'SET_USER_DETAILS',
        accessToken: Math.random().toString(36).substring(2, 15),
        refreshToken: Math.random().toString(36).substring(2, 15),
        username: email,
        userDetails: {
          email: email,
          name: 'Admin User',
        },
      })
    }
    else {
      showSuccess('Login Failed');
    }
  }

  return (
    <Formik
      validateOnBlur
      validateOnChange
      validationSchema={loginSchema}
      initialValues={getInitialState()}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldTouched,
        handleSubmit,
        setFieldValue,
      }) => (
        <div>
          <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <Row gutter={[16, 16]} justify={"center"}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <CustomControlledInput
                type={"text"}
                size='large'
                label='Email Address'
                value={values?.email}
                name='email'
                isRequired={true}
                placeholder='admin@gmail.com'
                onChange={(e) => {
                  setFieldTouched("email");
                  setFieldValue("email", e?.target?.value ?? "");
                }}
                showError={errors?.email && touched?.email}
                error={errors?.email}
                style={{ width: "100%" }} // Ensures consistent width
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <CustomControlledInput
                type={"password"}
                size='large'
                label='Password'
                value={values?.password}
                name='password'
                isRequired={true}
                placeholder='admin123'
                onChange={(e) => {
                  setFieldTouched("password");
                  setFieldValue("password", e?.target?.value ?? "");
                }}
                showError={errors?.password && touched?.password}
                error={errors?.password}
                style={{ width: "100%" }} // Ensures consistent width
              />
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "16px" }}>
            <Col>
              <Button type="primary" htmlType="submit" size='large'>
                Login
              </Button>
            </Col>
          </Row>
        </form>
      </div>
      )}
    </Formik>
  );
}
export default Login;
