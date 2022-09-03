import React from "react";
import classes from "./RecentComponent.module.css";
import { Avatar } from "@mui/material";

const RecentlistItemsComponent = ({ title, info, image }) => {
  return (
    <div className={classes.item}>
      <div className={classes.image__container}>
        {image ? (
          <Avatar src={image} sx={{ height: 50, width: 50 }} />
        ) : (
          <Avatar className={classes.image} sx={{ height: 50, width: 50 }}>
            {info.name.charAt(0).toUpperCase()}
          </Avatar>
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.left}>
          <h5>{title}</h5>
          {Object.keys(info).map((infoDetail, index) => (
            <p key={index}>
              <span>{infoDetail}</span>
              {info[infoDetail]}
            </p>
          ))}
        </div>
        <div className={classes.right}>
          <h5>{new Date().toLocaleDateString()}</h5>
        </div>
      </div>
    </div>
  );
};

export default RecentlistItemsComponent;
