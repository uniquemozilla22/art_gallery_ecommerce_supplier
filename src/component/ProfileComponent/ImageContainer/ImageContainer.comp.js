import React from "react";
import classes from "./ImageContainer.module.css";
import { Avatar } from "@mui/material";
import { Check } from "@mui/icons-material";

const ImageContainerComponent = ({ user }) => {
  return (
    <div className={classes.image__wrapper}>
      <div className={classes.cover__image}>
        <img src="https://wallpaperaccess.com/full/2667331.jpg" alt={"cover"} />
        <form>
          <label for="cover">Upload Cover Photo</label>
          <input
            id="cover"
            type="file"
            className="d-none"
            accept="image/png, image/gif, image/jpeg,image/jpg"
          />
        </form>
      </div>
      <div className={classes.profile__image}>
        <div className={classes.profile__image__container}>
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
          <div className={classes.profile__content}>
            <h4>
              {user.username}
              <span>
                <Check />
              </span>
            </h4>
            <p>{user.email}</p>
          </div>
        </div>

        <form>
          <label for="profile">Upload Profile</label>
          <input id="profile" type="file" className="d-none" />
        </form>
      </div>
    </div>
  );
};

export default ImageContainerComponent;
