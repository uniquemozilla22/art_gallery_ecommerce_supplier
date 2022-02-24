import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { HIDE_MESSAGE } from "../../store/Types";

const MessageHandle = (props) => {
  const [show, setShow] = useState(props.show);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(props.show);
  }, [props.show, props.info.message]);

  const handleClose = () => {
    dispatch({ type: HIDE_MESSAGE });
  };
  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.info.alert.toLowerCase()}
        sx={{ width: "100%" }}
      >
        {props.info.message || ""}
      </Alert>
    </Snackbar>
  );
};

export default MessageHandle;
