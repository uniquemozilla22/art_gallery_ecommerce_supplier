import React from "react";
import classes from "./MultipleData.module.css";
import FeatherIcons from "feather-icons-react";

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

const DataItem = ({ data }) => {
  return (
    <div className={classes.data__item}>
      <div className={classes.icon}>
        <FeatherIcons icon={data.icon} />
      </div>
      <h4>{data.name.split("_").join(" ")}</h4>
      <h3>{data.items}</h3>
    </div>
  );
};

export default MultipleData;
