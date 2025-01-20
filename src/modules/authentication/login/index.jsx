// import { formFields } from "./loginSchema";
// import {
//   Button,
//   Checkbox,
//   FormWrap,
//   Input,
//   Translation,
// } from "../../../core/common";
// import setuLogoLogin from "../../../assets/react.svg";
import { useEffect } from "react";
import { Col, Layout, Row, Form } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { useSetTokenData } from "./hooks/useSetTokenData";
// import "./login.less";
import { getUserName } from "../../../utility/methods.js";

function Login() {
  const [form] = Form.useForm();

  //   const { handleOnSubmit, isLoading, isChecked, setCheckBox } = useSetTokenData(
  //     {
  //       form,
  //     }
  //   );
  const defaultValues = {
    username: getUserName() || "",
    password: "",
    rememberMe: true,
  };

  const hasTimedOut = localStorage.getItem("SHOW_TOAST");

  useEffect(() => {
    if (hasTimedOut === "true") {
      localStorage.setItem("SHOW_TOAST", false);
    }
  }, []);

  return (
    <>LOGIN...</>
    // <Form layout='vertical' form={form} onFinish={handleOnSubmit} initialValues={defaultValues}>
    //   <Layout className='login-wrapper'>
    //     <div className='Login-page'>
    //       <Row justify='space-between' align='middle'>
    //         <Col className='gutter-row left-login' xs={24} sm={12}>
    //           <div className='branding-login'>
    //             <img
    //               alt='Shetu Logo'
    //               className='img-responsive'
    //               src={setuLogoLogin}
    //               width={250}
    //               height={211}
    //             />
    //           </div>
    //         </Col>
    //         <Col className='gutter-row right-login' xs={24} sm={12}>
    //           <div className='login-form'>
    //             {hasTimedOut === "true" ? (
    //               <div>
    //                 <Row>
    //                   {" "}
    //                   <p
    //                     style={{
    //                       color: "red",
    //                       lineHeight: 2,
    //                       padding: 10,
    //                       textAlign: "center",
    //                     }}
    //                   >
    //                     You have been logged out due to inactivity. Please log in again.
    //                   </p>
    //                 </Row>
    //               </div>
    //             ) : null}
    //             <h1 className='login-title'>
    //               <Translation text='login.title' />
    //             </h1>
    //             <FormWrap type={formFields?.userName}>
    //               <Input
    //                 placeholder={formFields?.userName?.placeHolder}
    //                 minLength={formFields?.userName?.minLength}
    //                 defaultValue={defaultValues?.userName}
    //                 type={formFields?.userName?.type}
    //                 maxLength={formFields?.userName?.maxLength}
    //                 size='large'
    //                 prefix={<UserOutlined />}
    //               />
    //             </FormWrap>
    //             <FormWrap type={formFields?.password}>
    //               <Input
    //                 placeholder={formFields?.password?.placeHolder}
    //                 inputType={formFields?.password?.type}
    //                 defaultValue={defaultValues?.password}
    //                 type={formFields?.password?.type}
    //                 maxLength={formFields?.password?.maxLength}
    //                 size='large'
    //                 prefix={<LockOutlined />}
    //                 onPaste={(e) => {
    //                   e.preventDefault();
    //                   return false;
    //                 }}
    //                 onCopy={(e) => {
    //                   e.preventDefault();
    //                   return false;
    //                 }}
    //               />
    //             </FormWrap>
    //             <FormWrap type={formFields?.rememberMe}>
    //               <div className='remember-forgot'>
    //                 <Checkbox
    //                   name={formFields?.rememberMe?.name}
    //                   text={<Translation text='login.rememberMeLabel' />}
    //                   checked={isChecked}
    //                   onChange={(e) => {
    //                     setCheckBox(e);
    //                   }}
    //                 />
    //                 <Link to='/forgot-password' className='forgot-link'>
    //                   <Translation text='login.forgotPasswordPlaceHolder' />
    //                 </Link>
    //               </div>
    //             </FormWrap>

    //             <Button
    //               type='primary'
    //               loading={isLoading}
    //               className='btn-orange btn-login'
    //               size='large'
    //               htmlType='submit'
    //               buttonText={t("login.button.loginButtonLabel")}
    //             />
    //             <Link to='/forgot-password' className='mobile-view'>
    //               <Translation text='login.forgotPasswordPlaceHolder' />
    //             </Link>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>
    //   </Layout>
    // </Form>
  );
}
export default Login;
