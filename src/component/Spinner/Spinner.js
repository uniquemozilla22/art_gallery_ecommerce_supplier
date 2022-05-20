import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Spinner.module.css";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading } from "../../store/actions/Loading/Loading";

const SpinnerComp = (props) => {
  const spinner = useSelector((state) => state.loader.show);
  const dispatch = useDispatch();
  const [show, setShow] = useState(spinner);

  useEffect(() => {
    setShow(spinner);
  }, [spinner]);

  const handleClose = () => dispatch(hideLoading());
  return props.fallback ? (
    <Spinner
      animation="border"
      role="status"
      variant="light"
      className={classes.spinner}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Modal open={show} onClose={handleClose}>
      <Spinner
        animation="border"
        role="status"
        variant="light"
        className={classes.spinner}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Modal>
  );
};

export default SpinnerComp;
