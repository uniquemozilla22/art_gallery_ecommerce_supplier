import React, { useState } from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import Banner from "./Banner/Banner.comp";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.login__container}>
      <Banner />
      <LoginForm />
    </div>
  );
};

export default Login;
