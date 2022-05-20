import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./../Sidebar/SidebarItem/SidebarItem";
import classes from "./PageHeadingLinks.module.css";

const PageHeadingLink = ({ link }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.pageHeadingLink}>
      <NavLink
        to={`./`}
        className={({ isActive }) => {
          setActive(isActive);
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
            setActive(isActive);
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
