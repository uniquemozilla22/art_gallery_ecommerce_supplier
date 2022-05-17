import { hideLoading } from "../../Loading/Loading";
import Error, { postErrorHandle } from "./../../../handleError/Error";
import axiosBase from "./../../../../axiosBase";
import { showLoading } from "./../../Loading/Loading";

const RegisterAction = (payload) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { data } = await post(payload);
      dispatch(hideLoading());

      return data;
    } catch (error) {
      postErrorHandle(dispatch, "Register Error", error);
    }
  };
};

const post = (payload) => {
  return axiosBase.post("create", { ...payload });
};

export default RegisterAction;
