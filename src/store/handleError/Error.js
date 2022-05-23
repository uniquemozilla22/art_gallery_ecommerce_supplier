import { hideLoading } from "../actions/Loading/Loading";
import {
  WarningMessage,
  ErrorMessage,
} from "./../actions/Message/Message.action";

export const postErrorHandle = (dispatch, title, error) => {
  dispatch(hideLoading());

  if (error.response === undefined) {
    dispatch(
      ErrorMessage({
        title,
        message: "Network Error ! Cannot find a connection",
      })
    );
  } else {
    if (error.response.statusCode === 500) {
      dispatch(
        WarningMessage({
          title,
          message: error.response.data.message,
        })
      );
    } else {
      dispatch(
        ErrorMessage({
          title,
          message: error.response.data.message,
        })
      );
    }
  }

  return false;
};

export const getErrorHandle = (dispatch, title, error) => {
  dispatch(hideLoading());
  if (error.response === undefined) {
    dispatch(
      ErrorMessage({
        title,
        message: "Network Error ! Cannot find a connection",
      })
    );
  } else {
    if (error.response.statusCode === 500) {
      dispatch(
        WarningMessage({
          title,
          message: error.response.data.message,
        })
      );
    } else {
      dispatch(
        ErrorMessage({
          title,
          message: error.response.data.message,
        })
      );
    }
  }

  return false;
};
