import React, { Suspense, useEffect } from "react";
import ForgetPasswordForm from "../../component/ForgotPasswordForm/ForgetPasswordForm";
import classes from "./ForgetPassword.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import ForgotVerifyEmail from "../../store/actions/Authentication/ForgotPassword/Verify/ForgotVerify.action";
import ForgotChangePassword from "../../store/actions/Authentication/ForgotPassword/Change/ForgotChangePassword.action";
// import ChangeForgotPassword from "../../store/actions/ChangeForgotPassword/ChangeForgetPassword.action";
// import EmailVerify from "../../store/actions/ChangeForgotPassword/EmailRegister.action";

const ForgetPassword = (props) => {
  const { id, token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ForgotVerifyEmail({ id, token }));
  }, []);

  return (
    <Suspense>
      <div className={classes.forget__password__container}>
        <ForgetPasswordForm
          id={id}
          token={token}
          postPasswords={(id, token, new_password, confirm_password) =>
            dispatch(
              ForgotChangePassword({
                id,
                token,
                new_password,
                confirm_password,
              })
            )
          }
        />
      </div>
    </Suspense>
  );
};

export default ForgetPassword;
