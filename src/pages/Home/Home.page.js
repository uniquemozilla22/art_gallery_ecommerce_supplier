import React from "react";
import { Route, Routes } from "react-router";
import HomeComponent from "../../component/DashboardHome/HomeComponent.comp";
import PageHeadingLink from "../../component/PageHeadingLinks/PageHeadingLinks.comp";
import classes from "./Home.module.css";

const Homepage = () => {
  let heading = ["home", "products", "profile"];
  return (
    <div className="container-fluid">
      <PageHeadingLink link={heading} />
      <h1 className={classes.pagetitle}>Dashboard</h1>
      <Routes>
        <Route path="/home" element={<HomeComponent />}></Route>
      </Routes>
    </div>
  );
};

export default Homepage;
