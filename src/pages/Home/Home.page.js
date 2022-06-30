import React from "react";
import { Route, Routes } from "react-router";
import HomeComponent from "../../component/DashboardHome/HomeComponent.comp";
import PageHeadingLink from "../../component/PageHeadingLinks/PageHeadingLinks.comp";
import OrderPage from "./Order/HomeOrder.page";
import HomeProfilePage from "./Profile/HomeProfile.page";

const Homepage = () => {
  let heading = ["products", "orders", "profile", "finance"];
  return (
    <div className="container-fluid">
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/orders" element={<OrderPage />}></Route>
        <Route path="/profile" element={<HomeProfilePage />}></Route>
        <Route path="/finance" element={<HomeProfilePage />}></Route>
      </Routes>
    </div>
  );
};

export default Homepage;
