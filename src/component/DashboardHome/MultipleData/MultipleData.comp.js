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
        <FeatherIcons icon="box" />
      </div>
      <h1>{data.name}</h1>
      <h1>{data.items}</h1>
    </div>
  );
};

export default MultipleData;
