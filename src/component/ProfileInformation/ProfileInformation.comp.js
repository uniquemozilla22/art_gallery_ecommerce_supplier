import React from "react";
import classes from "./ProfileInformation.module.css";

const ProfileInformationComponent = () => {
  return (
    <div>
      <div className={classes.title__container}>
        <h3>Documentation</h3>
      </div>
      <div className={classes.verified__documents}></div>
    </div>
  );
};

export default ProfileInformationComponent;
