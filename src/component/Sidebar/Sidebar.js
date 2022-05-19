import React from "react";
import classes from "./Sidebar.module.css";
import FeatherIcon from "feather-icons-react";
import SidebarItem from "./SidebarItem/SidebarItem";
import AvatarComp from "./Avatar/Avatar";
import { DashboardOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const userInfo = useSelector((state) => state.user);
  return (
    <>
      <div className={classes.container__sidebar}>
        <div className={classes.sidebar}>
          <div className={classes.sidebar_header}>
            <AvatarComp {...userInfo} />
          </div>
          <div className={classes.sidebar_body}>
            <SidebarItem link="Dashboard" icon={<DashboardOutlined />} />
            <SidebarItem
              link="Products"
              icon={<FeatherIcon icon={"shopping-bag"} />}
            />
            <SidebarItem link="Orders" icon={<FeatherIcon icon={"box"} />} />
            <SidebarItem
              link="Finance"
              icon={<FeatherIcon icon={"credit-card"} />}
            />
          </div>
          <div className={classes.sidebar__footer}>
            <SidebarItem
              link="Settings"
              icon={<FeatherIcon icon={"settings"} />}
            />
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Sidebar;
