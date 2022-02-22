import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";


const MessageHandle = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show, props.info.message]);

  const handleClose = () => {
    props.hideMessage();
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
