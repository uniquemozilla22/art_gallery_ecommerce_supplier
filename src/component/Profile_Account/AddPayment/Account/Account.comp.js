import React from "react";
import classes from "./Account.module.css";

const AccountComponent = () => {
  return (
    <div>
      <div className={classes.account}>
        <img
          src={"https://dao578ztqooau.cloudfront.net/static/img/logo1.png"}
          alt={"Khalti"}
        />
        <h4>Khalti</h4>
      </div>
    </div>
  );
};

export default AccountComponent;
