import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import classes from "./Avatar.module.css";
import { useDispatch } from "react-redux";
import { LogoutAction } from "./../../../store/actions/Authentication/Login/Login.action";
import { useNavigate } from "react-router";

const AvatarComp = ({ username, image, email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAction = async () => {
    const logout = await dispatch(LogoutAction());
    console.log(logout);
    if (logout) navigate("/login");
  };
  return (
    <div className={classes.avatar}>
      <Dropdown className={classes.dropdown}>
        <Dropdown.Toggle
          variant="secondary"
          className={classes.dropdown__button}
        >
          <Tooltip title={email || username} placement="right" arrow>
            <div className={classes.content}>
              {image ? (
                <Avatar alt={username} src={image} />
              ) : (
                <Avatar>{username?.charAt(0)}</Avatar>
              )}
            </div>
          </Tooltip>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" drop={"up"}>
          <Dropdown.Item onClick={() => navigate("/profile")}>
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => logoutAction()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AvatarComp;
