import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecentComponent.module.css";
import RecentlistItemsComponent from "./RecentsListItem.comp";

const RecentComponent = ({ title, data, link }) => {
  return (
    <div className={classes.recent__lists}>
      <div className={classes.title}>
        <h2>{title}</h2>
        <Link to={link}>See All</Link>
      </div>
      <div className={classes.lists}>
        {data.map((item, index) => (
          <RecentlistItemsComponent
            key={index}
            title={item.title}
            name={item.name}
            info={item.info}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentComponent;
