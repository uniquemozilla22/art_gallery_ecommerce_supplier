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
          <form>
            <label for="cover">Upload</label>
            <input id="cover" type="file" className="d-none" />
          </form>
        </div>
        <div className={classes.profile__image}>
          {user.image ? (
            <Avatar
              alt={user.username}
              src={user.image}
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
              className={classes.image__avatar}
            />
          ) : (
            <Avatar
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
              className={classes.image__avatar}
            >
              {user.username?.charAt(0)}
            </Avatar>
          )}
          <form>
            <label for="profile">Upload</label>
            <input id="profile" type="file" className="d-none" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
