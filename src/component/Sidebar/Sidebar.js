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
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"></path>
          </svg>
          <span>Art Gallery</span>
        </div>
        <div className={classes.sidebar_body}>
          <SidebarItem link="my_arts" />
          <SidebarItem link="my_orders" />
          <SidebarItem link="reviews" />
          <SidebarItem link="finance" />
          <SidebarItem link="get_help" />
          <SidebarItem link="Data Visualization" data={["charts", "bars"]} />
        </div>
        <div className={classes.sidebar__footer}>
          <AvatarComp name={"Yogesh Bhattarai"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
