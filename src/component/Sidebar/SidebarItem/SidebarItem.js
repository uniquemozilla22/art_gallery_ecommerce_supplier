import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../Sidebar.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SidebarItem = ({ link, data }) => {
  const [active, setActive] = useState(false);
  return data ? (
    <Accordion className={classes.Accordion__container}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.title + " " + (active ? classes.active : null)}>
          <span>
            {link.charAt(0).toUpperCase() + link.slice(1).split("_").join(" ")}
          </span>
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
        <span>
          {link.charAt(0).toUpperCase() + link.slice(1).split("_").join(" ")}
        </span>
      </div>
    </NavLink>
  );
};

export default SidebarItem;
