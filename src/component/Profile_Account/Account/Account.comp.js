import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import classes from "./Account.module.css";

const AccountComponent = ({ account, handleSelection, connected }) => {
  return connected ? (
    <button
      className={classes.account + " " + classes.connected__account}
      onClick={() => handleSelection(account)}
    >
      <img src={account.image} alt={account.name} />
      <div className={classes.connected__user__information}>
        <h4>{account.name}</h4>
        <p>{account?.user?.id || "9846779494"}</p>
        <p>{account?.user?.name || "Yogesh Bhattarai"}</p>
      </div>
      <div className={classes.connected}>
        <Tooltip title={`Delete ${account.name} account`}>
          <DeleteOutlined />
        </Tooltip>
      </div>
    </button>
  ) : (
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
