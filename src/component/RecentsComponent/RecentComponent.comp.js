import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecentComponent.module.css";
import RecentlistItemsComponent from "./RecentsListItem.comp";

const RecentComponent = ({ name, data, link }) => {
  return (
    <div className={classes.recents__container}>
      <div className={classes.title}>
        <h3>{name}</h3>
      </div>
      <div className={classes.recent__lists}>
        <div className={classes.title}>
          <h2>{name}</h2>
          <Link to={link}>{name}</Link>
        </div>
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
