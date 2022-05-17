import React, { useState, useEffect } from "react";
import AvatarTable from "../UserAvatar/UserAvatarTable.comp";
import classes from "../DataTable.module.css";
import { Tooltip } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const DataTableItem = ({ data, onAccept, onDecline, index, actions }) => {
  const [itemData, setItemData] = useState(data);

  const accept = (index, id) => {
    onAccept(index, id);
    let updating = itemData;
    console.log(updating);
    updating.order_status = "confirmed";
    setItemData({ ...updating });
  };
  const decline = (index, id) => {
    onDecline(index, id);
    let updating = itemData;
    console.log(updating);
    updating.order_status = "cancelled";
    setItemData({ ...updating });
  };

  return (
    <tr className={classes.dataItems}>
      <td>{itemData.id}</td>
      <td>
        <AvatarTable data={itemData.user} />
      </td>
      <td>
        <AvatarTable data={itemData.product} />
      </td>
      <td>{itemData.delivery_date}</td>
      <td>
        {parseInt(itemData.pricing).toLocaleString("en-IN", {
          style: "currency",
          currency: "NRS",
        })}
      </td>
      <td>
        {itemData.order_status === "pending" ? (
          <>
            <h5>{itemData.order_status}</h5>
            <div className={classes.button__container}>
              <Tooltip title="Accept">
                <button
                  className={classes.accept__button}
                  onClick={(e) => accept(index, itemData.id)}
                >
                  <FeatherIcon icon="check" />
                </button>
              </Tooltip>
              <Tooltip title="Cancel">
                <button
                  className={classes.decline__button}
                  onClick={(e) => decline(index, itemData.id)}
                >
                  <FeatherIcon icon="x" />
                </button>
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            <h5>{itemData.order_status}</h5>
          </>
        )}
      </td>
      <td>
        {actions(itemData.id).map((actions) => actions)}
        {actions(itemData.id).map((actions) => actions)}
      </td>
    </tr>
  );
};

export default DataTableItem;
