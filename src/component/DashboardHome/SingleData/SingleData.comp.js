import React from "react";
import { DataItem } from "../MultipleData/MultipleData.comp";
import classes from "./SingleData.module.css";

const SingleData = ({ data }) => {
  return (
    <div className={classes.single__data}>
      <DataItem data={data[0]} />
    </div>
  );
};

export default SingleData;
