import axiosBase from "../../../axiosBase";
import { postErrorHandle } from "../../handleError/Error";
import { hideLoading, showLoading } from "../Loading/Loading";
import { SuccessMessage } from "../Message/Message.action";
import { LOGIN } from "../../Types";

const SocialAuthentication = (info) => {
  return async (dispatch) => {
    console.log("Info to google", info);
    dispatch(showLoading());
    try {
      const res = await authenticateUsingGoogle(info);
      console.log(res.data);
      dispatch(hideLoading());
      dispatch(
        SuccessMessage({
          title: "Login",
          message: res.data.msg,
        })
      );
      dispatch({
        type: LOGIN,
        payload: {
          token: res.data.token,
          username: res.data.username,
        },
      });
    } catch (error) {
      postErrorHandle(dispatch, info.provider + " Login Error", error);
    }
  };
};

const authenticateUsingGoogle = (userInfo) => {
  return axiosBase.post("/auth/social", { userInfo });
};

export default SocialAuthentication;
