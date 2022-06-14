import React from "react";
import classes from "./Account.module.css";

const AccountComponent = ({ account, handleSelection }) => {
  return (
    <button
      className={classes.account}
      onClick={() => handleSelection(account)}
    >
      <img src={account.image} alt={account.name} />
      <h4>{account.name}</h4>
    </button>
  );
};

export default AccountComponent;
