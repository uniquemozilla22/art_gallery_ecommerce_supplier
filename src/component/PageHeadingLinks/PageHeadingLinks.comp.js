import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./../Sidebar/SidebarItem/SidebarItem";
import classes from "./PageHeadingLinks.module.css";

const PageHeadingLink = ({ link }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.pageHeadingLink}>
      {link.map((link) => (
        <NavLink
          to={`/${link}`}
          className={({ isActive }) => {
            setActive(isActive);
            return !isActive ? null : classes.active;
          }}
        >
          <div classname={classes.title}>
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
