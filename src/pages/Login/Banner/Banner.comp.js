import React from "react";
import classes from "./Banner.module.css";
import FeatherIcons from "feather-icons-react";

const Banner = () => {
  return (
      <div className={classes.login__banner}>
        <h2>Welcome Artist,</h2>

        <div className={classes.login__banner__icons}>
          <div className={classes.banner_icon}>
            <div className={classes.icon__container}>
              <FeatherIcons icon="log-in" />
            </div>
            <p>Login</p>
          </div>
          <div className={classes.banner_icon}>
            <div className={classes.icon__container}>
              <FeatherIcons icon="file-plus" className={classes.icon} />
            </div>
            <p>Post</p>
          </div>
          <div className={classes.banner_icon}>
            <div className={classes.icon__container}>
              <FeatherIcons icon="dollar-sign" />
            </div>
            <p>Earn</p>
          </div>
        </div>
        <h3>
          It's that <span>Easy</span>
        </h3>
        <p className={classes.content}>
          Giving you a perfect gallery to represent your <span>talent</span>
        </p>

        <div className={classes.link__container}>
          <p>Are you buying?</p>
          <a href="/">Go to Customer Login</a>
        </div>
      </div>
  );
};

export default Banner;
