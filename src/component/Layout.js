import React from "react";
import { useLocation } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
  const location = useLocation();
  const SidebarRestricted = ["/login", "/register"];
  return (
    <>
      {!SidebarRestricted.includes(location.pathname) ? <Sidebar /> : null}
      {props.children}
    </>
  );
};

export default Layout;
