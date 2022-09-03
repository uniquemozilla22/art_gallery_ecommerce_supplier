import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Slide, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MESSAGE } from "../../store/Types";

const MessageHandle = (props) => {
  const message = useSelector((state) => state.message);
  const [show, setShow] = useState(message.show);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(message.show);
  }, [message.show, message.info.message]);

  const handleClose = () => {
    dispatch({ type: HIDE_MESSAGE });
  };
  return (
    <>
      <Snackbar
        open={show}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={"toptight"}
      >
        <Alert
          onClose={handleClose}
          severity={message.info.alert.toLowerCase()}
          key={"top" + "right"}
          sx={{
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderLeft: "3px solid",
          }}
        >
          <AlertTitle
            style={{
              textTransform: "capitalize",
              margin: "0",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            {message.info.title || ""}
          </AlertTitle>
          <p
            style={{
              textTransform: "capitalize",
              margin: "0",
              fontWeight: "400",
              fontSize: "1rem",
            }}
          >
            {message.info.message || ""}
          </p>
        </Alert>
      </Snackbar>
    </>
  );
};

export default MessageHandle;
