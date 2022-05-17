import { Chip, Avatar } from "@mui/material";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import classes from "./Avatar.module.css";
import { useDispatch } from "react-redux";
import { LogoutAction } from "./../../../store/actions/Authentication/Login/Login.action";
import { useNavigate } from "react-router";

const AvatarComp = ({ name, image, options }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAction = () => {
    dispatch(LogoutAction());
    navigate("/login");
  };
  return (
    <div className={classes.avatar}>
      <Dropdown className={classes.dropdown}>
        <Dropdown.Toggle
          variant="secondary"
          className={classes.dropdown__button}
        >
          <div className={classes.content}>
            {image ? (
              <Avatar alt={name} src={image} />
            ) : (
              <Avatar>{name.charAt(0)}</Avatar>
            )}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" drop={"up"}>
          <Dropdown.Item>Edit Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => logoutAction()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AvatarComp;
