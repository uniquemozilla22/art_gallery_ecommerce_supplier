import { getErrorHandle } from "../../handleError/Error";
import axiosBase from "./../../../axiosBase";

const ProfileDataFetch = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await fetch(getState().user.token);
      console.log(data);
      return data;
    } catch (error) {
      getErrorHandle(dispatch, "Fetch User Error", error);
    }
  };
};

const fetch = (token) => axiosBase(token).get("details");

export default ProfileDataFetch;
