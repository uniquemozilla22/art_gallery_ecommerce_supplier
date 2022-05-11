import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../Sidebar.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SidebarItem = ({ link, data, icon }) => {
  const [active, setActive] = useState(false);
  return data ? (
    <Accordion className={classes.Accordion__container}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.title + " " + (active ? classes.active : null)}>
          <span>{link}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {data.map((link) => (
          <SidebarItem link={link} />
        ))}
      </AccordionDetails>
    </Accordion>
  ) : (
    <NavLink
      to={`/${link}`}
      className={({ isActive }) => {
        setActive(isActive);
        return !isActive ? null : classes.active;
      }}
    >
      <div classname={classes.title}>
        <Tooltip title={link.split("_").join(" ")}>
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
