import React from "react";
import AccountComponent from "../Account/Account.comp";
import classes from "./ConnectedAccounts.module.css";

const ConnectedAccountsComponents = ({ accounts }) => {
  return (
    <>
      <div className={classes.title}>
        <h4>Connected Accounts</h4>
        <p>You have connected these accounts to your account.</p>
      </div>
      <div className={classes.connected__accounts__lists}>
        {accounts.map((account, index) => (
          <AccountComponent
            account={account}
            connected
            handleSelection={() => console.log("Selected")}
          />
        ))}
      </div>
    </>
  );
};

export default ConnectedAccountsComponents;
