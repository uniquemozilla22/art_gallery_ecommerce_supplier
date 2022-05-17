import axiosBase from "../../../../axiosBase";
import { postErrorHandle } from "../../../handleError/Error";
import { LOGIN } from "../../../Types";
import { showLoading, hideLoading } from "../../Loading/Loading";
import { SuccessMessage } from "../../Message/Message.action";
import { LOGOUT } from "./../../../Types";

const LoginAction = (payload) => {
  return (dispatch) => {
    dispatch(showLoading());
    LoginPost(payload)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(
          SuccessMessage({
            title: "Login",
            message: res.data.message,
          })
        );
        dispatch({
          type: LOGIN,
          payload: {
            token: res.data.token,
          },
        });
      })
      .catch((err) => {
        postErrorHandle(dispatch, "Login Error", err);
      });
  };
};

export const LogoutAction = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch({ type: LOGOUT });
    dispatch(hideLoading());
  };
};

const LoginPost = (payload) => {
  return axiosBase.post("login", payload);
};

const LogoutPost = () => {
  return axiosBase.post("/auth/login");
};

export default LoginAction;
