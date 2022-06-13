import React, { useState } from "react";
import AddPaymentComponent from "./AddPayment/AddPayment.comp";
import classes from "./ProfileAccount.module.css";

const ProfileAccount = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "khalti",
      image: "https://dao578ztqooau.cloudfront.net/static/img/logo1.png",
    },
  ]);
  return (
    <div className={classes.profileAccount}>
      <AddPaymentComponent accounts={accounts} />
    </div>
  );
};

export default ProfileAccount;
