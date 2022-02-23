import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { connect } from "react-redux";
import ForgotPassword from "../forgotPassword/ForgotPassword";
import { Fade } from "react-reveal";

const LoginForm = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [validation, setValidation] = useState({
    email: { validated: null, message: "" },
    password: { validated: null, message: "" },
  });

  const [view, setView] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation({
      email: { validated: null, message: "" },
      password: { validated: null, message: "" },
    });
    if (data.email) {
      if (/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        if (data.password) {
          if (
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
              data.password
            )
          ) {
            setValidation({
              email: { validated: null, message: "" },
              password: { validated: null, message: "" },
            });
            props.Login(data.email, data.password);
          } else {
            setValidation({
              ...validation,
              email: { validated: null, message: "" },
              password: {
                validated: false,
                message:
                  "Invalid Password format : 8 - 20  characters \n , one uppercase character \n ,  one lowercase character \n & one digit \n  ",
              },
            });
          }
        } else {
          setValidation({
            ...validation,
            email: { validated: null, message: "" },
            password: { validated: false, message: "Password Not Found" },
          });
        }
      } else {
        setValidation({
          ...validation,
          email: { validated: false, message: "Invalid Email Format" },
        });
      }
    } else {
      setValidation({
        ...validation,
        email: { validated: false, message: "Email Not Found" },
      });
    }
  };

  const classNameContainer = () => {
    return props.loginModal ? classes.login__modal : classes.login__form;
  };

  return (
    <Fade>
      <div className={classNameContainer()}>
        <div className={classes.title__login}>
          <h1>Login.</h1>
          {props.closeComponent ? props.closeComponent : null}
        </div>
        <form
          className={classes.login__form__container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="email"
            placeholder="Email"
            className={classes.input}
            name="email"
            onChange={(e) => handleEmail(e)}
          />
          {validation.email.validated === false ? (
            <p className={classes.errorMessage}>{validation.email.message}</p>
          ) : null}
          <input
            type={view ? "text" : "password"}
            placeholder="Password"
            name={"password"}
            className={classes.input}
            onChange={(e) => handlePassword(e)}
            onClick={(e) => setView(!view)}
            onFocusCapture={(e) => setView(true)}
            onBlur={(e) => setView(false)}
            style={view ? { background: "#ff595920" } : null}
          />
          {validation.password.validated === false ? (
            <p className={classes.errorMessage}>
              {validation.password.message}
            </p>
          ) : null}

          <input type="submit" placeholder="Login" className={classes.submit} />
        </form>
        <div className={classes.login__seperator}>
          <div onClick={() => props.toggleForgetPassword()}>
            Forgot Password?
          </div>
          <p>or</p>
        </div>
        <div className={classes.other__methods}>
          <Link to="/register" className={classes.link}>
            Create a Seller Account
          </Link>
          <p>Use Alternatives</p>
          <div className={classes.social__alternatives}>
            <div className={classes.icons}>
              <FacebookOutlined />
            </div>
            <div className={classes.icons}>
              <Google onClick={(e) => props.GoogleLogin()} />
            </div>
          </div>
        </div>
      </div>
      <ForgotPassword
        show={props.modal.forgot}
        toggleForgetPassword={() => props.toggleForgetPassword()}
        sendMail={(e) => props.sendMail(e)}
      />
    </Fade>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   Login: (email, password) => dispatch(LoginAction({ email, password })),
    // Loader: (data) =>
    // data ? dispatch(showLoading()) : dispatch(hideLoading()),
    //   GoogleLogin: () => dispatch(GoogleAuthAction()),
    toggleForgetPassword: () => dispatch({ type: "FORGOT__MODEL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
