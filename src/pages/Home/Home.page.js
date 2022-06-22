import React from "react";
import { Route, Routes } from "react-router";
import HomeComponent from "../../component/DashboardHome/HomeComponent.comp";
import PageHeadingLink from "../../component/PageHeadingLinks/PageHeadingLinks.comp";
import classes from "./Home.module.css";
import OrderPage from "./Order/Order.page";

const Homepage = () => {
  let heading = ["products", "orders", "profile"];
  return (
    <div className="container-fluid">
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/orders" element={<OrderPage />}></Route>
      </Routes>
    </div>
  );
};

export default Homepage;
