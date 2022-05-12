import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import MessageHandle from "./ErrorHandle/ErrorHandle";
import Sidebar from "./Sidebar/Sidebar";
import SpinnerComp from "./Spinner/Spinner";

const Layout = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const SidebarRestricted = ["/login", "/register", "/users/resetPassword"];
  const [token, setToken] = useState(props.user.token);

  useEffect(() => {
    setToken(props.user.token);
    if (props.user.token !== null) {
      if (SidebarRestricted.includes(location.pathname)) {
        navigate("/");
      }
    }
  }, [props.user.token]);
  return (
    <>
      {!SidebarRestricted.includes(location.pathname) ? (
        <Sidebar>
          <div style={{ marginLeft: "80px" }}>{props.children}</div>
        </Sidebar>
      ) : (
        <div style={{ marginLeft: "80px" }}>{props.children}</div>
      )}
      <MessageHandle {...props.message} />
      <SpinnerComp {...props.loader} />
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
