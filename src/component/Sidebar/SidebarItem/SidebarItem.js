import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Sidebar.module.css";
import { Tooltip } from "@mui/material";

const SidebarItem = ({ link, data, icon }) => {
  return (
    <NavLink
      to={`/${link.toLowerCase()}`}
      className={({ isActive }) => {
        return !isActive ? null : classes.active;
      }}
    >
      <div className={classes.title}>
        <Tooltip title={link.split("_").join(" ")} arrow placement="right">
          {icon ? (
            <span>{icon}</span>
          ) : (
            <span>{link.split("_").join(" ")}</span>
          )}
        </Tooltip>
      </div>
    </NavLink>
  );
};

export default SidebarItem;
