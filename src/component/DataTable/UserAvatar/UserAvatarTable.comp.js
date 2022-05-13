import { Avatar } from "@mui/material";
import React from "react";
import classes from "./UserAvatarTable.module.css";

const AvatarTable = ({ data }) => {
  return (
    <div className={classes.avatar_table}>
      {data.image ? (
        <Avatar src={data.image} />
      ) : (
        <Avatar>{data.name.charAt(0)}</Avatar>
      )}
      <p>{data.name}</p>
    </div>
  );
};

export default AvatarTable;
