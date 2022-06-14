import { HomeWorkTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import AddPaymentComponent from "./AddPayment/AddPayment.comp";
import classes from "./ProfileAccount.module.css";
import { Modal } from "@mui/material";

const ProfileAccount = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "khalti",
      image: "https://dao578ztqooau.cloudfront.net/static/img/logo1.png",
      description: (
        <p>
          You will be redirected to your Khalti account to complete your
          payment:
          <br /> 1. Login to your Khalti account using your Khalti ID and your
          Password <br />
          2. Ensure your Khalti account is active and has sufficient balance{" "}
          <br />
          3. Enter OTP (one time password) sent to your registered mobile number
          ***Login with your eSewa mobile and PASSWORD (not MPin)***
        </p>
      ),
    },
    {
      id: 2,
      name: "Esewa",
      image:
        "https://www.katcentre.org.np/wp-content/uploads/2021/09/esewa.png",
      description: (
        <p>
          You will be redirected to your Esewa account to complete your payment:
          <br /> 1. Login to your Esewa account using your eSewa ID and your
          Password <br />
          2. Ensure your eSewa account is active and has sufficient balance{" "}
          <br />
          3. Enter OTP (one time password) sent to your registered mobile number
          ***Login with your eSewa mobile and PASSWORD (not MPin)***
        </p>
      ),
    },

    {
      id: 3,
      name: "Paypal",
      image:
        "http://www.bhasanepal.com/wp-content/uploads/2018/03/paypal-784404_1280.png",
      description: (
        <p>
          You will be redirected to your Paypal account to complete your
          payment:
          <br /> 1. Login to your Paypal account using your Paypal ID and your
          Password <br />
          2. Ensure your Paypal account is active and has sufficient balance{" "}
          <br />
          3. Enter OTP (one time password) sent to your registered mobile number
          ***Login with your eSewa mobile and PASSWORD (not MPin)***
        </p>
      ),
    },
    {
      id: 4,
      name: "Ime Pay",
      image:
        "https://www.financialnotices.com/pagegallery/ime-digital-solution-limited21.png",
      description: (
        <p>
          You will be redirected to your Ime Pay's account to complete your
          payment:
          <br /> 1. Login to your Khalti account using your Ime Pay's ID and
          your Password <br />
          2. Ensure your Ime Pay's account is active and has sufficient balance{" "}
          <br />
          3. Enter OTP (one time password) sent to your registered mobile number
          ***Login with your Ime Pay's mobile and PASSWORD (not MPin)***
        </p>
      ),
    },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleSelectedAccountShow = (data) => {
    setSelectedAccount({ ...data });
    setModalShow(true);
  };

  const handleSelectedAccountHide = () => {
    setSelectedAccount(null);
    setModalShow(false);
  };

  return (
    <>
      <div className={classes.connected__account}>
        <h2>Connected Acconts</h2>
      </div>
      <div className={classes.profileAccount}>
        <AddPaymentComponent
          accounts={accounts}
          handleSelection={handleSelectedAccountShow}
        />
      </div>
      <PaymentGatewayAuthentication
        show={modalShow}
        handleHide={handleSelectedAccountHide}
        {...selectedAccount}
      />
    </>
  );
};

const PaymentGatewayAuthentication = ({
  show,
  handleHide,
  name,
  description,
  onSubmit,
}) => {
  const [id, setId] = useState("");
  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.esewa__modal}>
        <div className={classes.title}>
          <h4>{name}</h4>
        </div>
        <div className={classes.esewa__notes}>
          <p>{description}</p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type={"text"}
            onChange={(e) => setId(e.target.value)}
            placeholder="Mobile Number"
          />
          <input type={"submit"} />
        </form>
      </div>
    </Modal>
  );
};
export default ProfileAccount;
