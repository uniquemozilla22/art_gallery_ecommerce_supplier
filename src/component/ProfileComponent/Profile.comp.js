import { Avatar } from "@mui/material";
import React from "react";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
const ProfileComponent = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={classes.profile__component}>
      <div className={classes.image__wrapper}>
        <div className={classes.cover__image}>
          <img
            src="https://wallpaperaccess.com/full/2667331.jpg"
            alt={"cover"}
          />
        </div>
        <div className={classes.profile__image}>
          {user.image ? (
            <Avatar
              alt={user.username}
              src={user.image}
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Avatar variant="rounded" sx={{ width: "100%", height: "100%" }}>
              {user.username.charAt(0)}
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
