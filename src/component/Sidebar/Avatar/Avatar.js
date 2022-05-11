import { Chip, Avatar } from "@mui/material";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import classes from "./Avatar.module.css";

const AvatarComp = ({ name, image, options }) => {
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
            {/* <div className={classes.name}>
              <h5>{name}</h5>
              <p>Artist</p>
            </div> */}
          </div>
          {/* <FeatherIcon icon="more-vertical" /> */}
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" drop={"up"}>
          <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AvatarComp;
