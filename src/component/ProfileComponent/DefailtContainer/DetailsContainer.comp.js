import React from "react";
import classes from "./DetailsContainer.module.css";

const DetailsContainerComponent = () => {
  return (
    <div className={classes.detail__cotnainer}>
      <div className={classes.detail}>
        <h5>Profile</h5>
        <p>ProfileData</p>
      </div>
    </div>
  );
};

export default DetailsContainerComponent;
