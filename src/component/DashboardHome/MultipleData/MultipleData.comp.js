import React from "react";
import classes from "./MultipleData.module.css";
import FeatherIcons from "feather-icons-react";
import { Avatar, Tooltip } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

const MultipleData = ({ data }) => {
  return (
    <div className={classes.data__multiple}>
      <h3 className={classes.date}>
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h3>
      <p className={classes.day}>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </p>

      <div className={classes.data__items_container}>
        {data.map((item, index) => (
          <DataItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export const DataItem = ({ data }) => {
  const navigation = useNavigate();
  return (
    <div className={classes.data__item}>
      <div className={classes.icon}>
        <Avatar sx={{ background: "white", color: "#2b2b2b" }}>
          <FeatherIcons icon={data.icon} />
        </Avatar>
      </div>
      <h4>{data.name.split("_").join(" ")}</h4>
      <h3>{data.items}</h3>
      {data.link ? (
        <div
          className={classes.link}
          onClick={() => navigation("/" + data.link)}
        >
          <Tooltip title={"Go to " + data.link}>
            <ChevronRightOutlined />
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
};

export default MultipleData;
