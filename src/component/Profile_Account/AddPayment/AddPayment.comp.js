import React from "react";
import classes from "./AddPayment.module.css";
import AccountComponent from "./Account/Account.comp";

const AddPaymentComponent = ({ accounts }) => {
  return (
    <div className={classes.addPaymentMethod}>
      <div className={classes.title}>
        <h3>Add Payment Method</h3>
        <p>Your Balance can be transferred to these accounts</p>
      </div>
      <div className={classes.link_accounts}>
        {accounts.map((account, index) => (
          <AccountComponent key={index} account={account} />
        ))}
      </div>
    </div>
  );
};

export default AddPaymentComponent;
