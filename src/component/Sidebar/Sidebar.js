import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./Sidebar.module.css";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem/SidebarItem";
import AvatarComp from "./Avatar/Avatar";

const Sidebar = () => {
  return (
    <div className={classes.container__sidebar}>
      <div className={classes.sidebar}>
        <div className={classes.sidebar_header}>
          <AvatarComp name={"Yogesh Bhattarai"} />
        </div>
        <div className={classes.sidebar_body}>
          <SidebarItem link="" icon={<FeatherIcon icon={"home"} />} />
          <SidebarItem
            link="my_arts"
            icon={<FeatherIcon icon={"shopping-bag"} />}
          />
          <SidebarItem link="my_orders" icon={<FeatherIcon icon={"box"} />} />

          <SidebarItem
            link="finance"
            icon={<FeatherIcon icon={"credit-card"} />}
          />
        </div>
        <div className={classes.sidebar__footer}>
          <SidebarItem
            link="settings"
            icon={<FeatherIcon icon={"settings"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
