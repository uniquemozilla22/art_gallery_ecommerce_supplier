import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import MessageHandle from "./ErrorHandle/ErrorHandle";
import Sidebar from "./Sidebar/Sidebar";
import SpinnerComp from "./Spinner/Spinner";

const Layout = (props) => {
  const location = useLocation();
  const SidebarRestricted = ["/login", "/register"];

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
