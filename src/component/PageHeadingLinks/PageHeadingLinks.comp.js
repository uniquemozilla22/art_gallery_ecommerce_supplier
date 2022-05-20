import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./../Sidebar/SidebarItem/SidebarItem";
import classes from "./PageHeadingLinks.module.css";

const PageHeadingLink = ({ link }) => {
  return (
    <div className={classes.pageHeadingLink}>
      <NavLink
        to={`./`}
        className={({ isActive }) => {
          return !isActive ? null : classes.active;
        }}
      >
        <div className={classes.title}>
          <Tooltip title={"Home"}>
            <span>Home</span>
          </Tooltip>
        </div>
      </NavLink>
      {link.map((link, index) => (
        <NavLink
          key={index}
          to={`${link}`}
          className={({ isActive }) => {
            return !isActive ? null : classes.active;
          }}
        >
          <div className={classes.title}>
            <Tooltip title={link.split("_").join(" ")}>
              <span>{link.split("_").join(" ")}</span>
            </Tooltip>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default PageHeadingLink;
