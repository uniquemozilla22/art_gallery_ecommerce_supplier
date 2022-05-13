import React, { useEffect, useState } from "react";
import classes from "./DataTable.module.css";
import FeatherIcon from "feather-icons-react";
import AvatarTable from "./UserAvatar/UserAvatarTable.comp";
import { Tooltip } from "@mui/material";
import { DataItem } from "../DashboardHome/MultipleData/MultipleData.comp";
import DataTableItem from "./Item/DataTableItem.comp";

const DataTable = ({ data, changeStatus }) => {
  const [tableData, setTableData] = useState(data);
  const order = [
    "order ID",
    "user",
    "product",
    "delivery_date",
    "pricing",
    "delivery_status",
  ];

  const onAccept = (index, id) => changeStatus("confirmed", index, id);
  const onDecline = (index, id) => changeStatus("cancelled", index, id);

  return (
    <div className={classes.data__table}>
      <div className={classes.options_filter}>
        <div className={classes.search__data}>
          <FeatherIcon icon="search" />
          <input
            type="text"
            placeholder="Search Orders by id , user , product or something else"
          />
        </div>
        <div className={classes.actions__container}>
          <FeatherIcon icon="filter" />
          <p>Filter</p>
        </div>
        <div className={classes.actions__container}>
          <FeatherIcon icon="file-plus" />
          <p>Export</p>
        </div>
      </div>
      <table className={classes.data__table__wrapper}>
        <tr>
          {order.map((order, index) => (
            <th key={index}>{order.split("_").join(" ")}</th>
          ))}
        </tr>
        {tableData.map((data, index) => {
          return (
            <DataTableItem
              key={index}
              onAccept={onAccept}
              onDecline={onDecline}
              data={data}
              index={index}
            />
          );
        })}
      </table>
    </div>
  );
};

export default DataTable;
