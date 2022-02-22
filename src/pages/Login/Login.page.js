import React, { useState } from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.login__container}>
      <LoginForm />
    </div>
  );
};

export default Login;
