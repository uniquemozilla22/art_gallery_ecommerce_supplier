import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import MessageHandle from "./ErrorHandle/ErrorHandle";
import Sidebar from "./Sidebar/Sidebar";
import SpinnerComp from "./Spinner/Spinner";

const Layout = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const SidebarRestricted = ["/login", "/register"];
  const [token, setToken] = useState(props.user.token);

  useEffect(() => {
    setToken(props.user.token);
    if (props.user.token !== null) {
      if (SidebarRestricted.includes(location.pathname)) {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, [SidebarRestricted, location.pathname, navigate, props.user.token]);
  return (
    <>
      {!SidebarRestricted.includes(location.pathname) ? <Sidebar /> : null}
      <MessageHandle {...props.message} />
      <SpinnerComp {...props.loader} />
      {props.children}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
