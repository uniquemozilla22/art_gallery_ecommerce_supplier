import React from "react";
import classes from "./register.module.css";

import RegisterForm from "../../component/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className={classes.register__container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
