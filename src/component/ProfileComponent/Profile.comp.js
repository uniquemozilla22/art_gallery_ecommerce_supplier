import { Avatar } from "@mui/material";
import React from "react";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import ImageContainerComponent from "./ImageContainer/ImageContainer.comp";
const ProfileComponent = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={classes.profile__component}>
      <ImageContainerComponent user={user} />
    </div>
  );
};

export default ProfileComponent;
