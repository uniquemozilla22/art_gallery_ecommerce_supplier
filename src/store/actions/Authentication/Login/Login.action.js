import axiosBase from "../../../../axiosBase";
import { LOGIN } from "../../../Types";
import { showLoading, hideLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message.action";

const LoginAction = (payload) => {
  return (dispatch) => {
    dispatch(showLoading());
    LoginPost(payload)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
        return dispatch({
          type: LOGIN,
          payload: {
            token: res.data.token,
          },
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
        if (err.response.status === 400) {
          dispatch(WarningMessage({ message: err.response.data.message }));
        } else {
          dispatch(ErrorMessage({ message: err.response.data.message }));
        }
      });
  };
};

const LoginPost = (payload) => {
  return axiosBase.post("/auth/login", payload);
};

export default LoginAction;
