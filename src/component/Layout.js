import React, { Suspense, useEffect, useMemo, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import MessageHandle from "./ErrorHandle/ErrorHandle";
import Sidebar from "./Sidebar/Sidebar";
import SpinnerComp from "./Spinner/Spinner";

const Layout = (props) => {
  const tokenRedux = useSelector((state) => state.user.token);
  const location = useLocation();
  const navigate = useNavigate();
  const SidebarRestricted = useMemo(() => {
    return ["/login", "/register", "/users/resetPassword"];
  }, []);
  const [token, setToken] = useState(tokenRedux);

  useEffect(() => {
    setToken(tokenRedux);
    if (token !== null) {
      if (SidebarRestricted.includes(location.pathname)) {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, [SidebarRestricted, location.pathname, navigate, token, tokenRedux]);

  return (
    <>
      {!SidebarRestricted.includes(location.pathname) ? (
        <Sidebar>
          <div style={{ marginLeft: "80px" }}>{props.children}</div>
        </Sidebar>
      ) : (
        <>{props.children}</>
      )}
      <MessageHandle />
      <SpinnerComp />
    </>
  );
};

export default Layout;
