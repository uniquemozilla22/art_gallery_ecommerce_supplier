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
            username: res.data.username,
          },
        });
      })
      .catch((err) => {
        postErrorHandle(dispatch, "Login Error", err);
      });
  };
};

export const LogoutAction = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      dispatch(hideLoading());
      const logout = await LogoutPost(getState().user.token);
      console.log(logout);
      dispatch({ type: LOGOUT });
      return true;
    } catch (error) {
      console.log(error);
      return postErrorHandle(dispatch, "Logout Error", error);
    }
  };
};

const LoginPost = (payload) => {
  return axiosBase().post("login", payload);
};

const LogoutPost = (token) => {
  return axiosBase(token).post("logout");
};

export default LoginAction;
