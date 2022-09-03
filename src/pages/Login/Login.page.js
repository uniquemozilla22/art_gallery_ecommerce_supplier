import React from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import Banner from "./Banner/Banner.comp";
import classes from "./Login.module.css";

const Login = () => {
  console.log("Login page");
  return (
    <div className={classes.login__container}>
      <Banner />
      <LoginForm />
    </div>
  );
};

export default Login;
