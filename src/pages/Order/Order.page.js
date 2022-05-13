import React from "react";
import classes from "./Order.module.css";
import PageHeadingLink from "./../../component/PageHeadingLinks/PageHeadingLinks.comp";
import { Route, Routes } from "react-router";
import OrderHomeComponent from "../../component/OrderHome/OrderHome.comp";

const OrderPage = () => {
  let heading = ["recents", "shipping", "cancelled", "history"];

  return (
    <div className={"container-fluid"}>
      <PageHeadingLink link={heading} />
      <h1 className={classes.pagetitle}>Orders</h1>
      <Routes>
        <Route path={"/"} element={<OrderHomeComponent />} />
      </Routes>
    </div>
  );
};

export default OrderPage;
