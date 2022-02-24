import axiosBase from "../../../../../axiosBase";
import { hideLoading, showLoading } from "../../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../../Message/Message.action";

const ForgotVerifyEmail = (payload) => {
  return (dispatch) => {
    dispatch(showLoading());
    Registeremail(payload)
      .then((res) => {
        dispatch(hideLoading());

        dispatch(SuccessMessage({ message: res.data.message }));
      })
      .catch((err) => {
        dispatch(hideLoading());

        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "No Internet Connect!! Please Refresh First",
            })
          );
        }
        if (err.response.status === 500) {
          dispatch(
            WarningMessage({
              message:
                err.response.data.message + "! Please resend the request",
            })
          );
        } else {
          dispatch(
            ErrorMessage({
              message: err.response.data.message,
            })
          );
        }
      });
  };
};

const Registeremail = (payload) => {
  return axiosBase.get(`users/resetPassword/${payload.id}/${payload.token}`);
};

export default ForgotVerifyEmail;
