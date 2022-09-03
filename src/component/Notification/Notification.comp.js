import { Avatar, Chip, Tooltip } from "@mui/material";
import React from "react";
import classes from "./Notification.module.css";
import FeatherIcon from "feather-icons-react";
import { RefreshOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

const NotificationComp = () => {
  const navigation = useNavigate();
  const notifications = [
    {
      title: "Order Placed",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date(),
      description: "The Order for product 1 has been placed",
    },
    {
      title: "Order Placed",
      time: new Date(),
      description: "The Order for product 1 has been placed",
    },
  ];
  return (
    <div className={classes.notification__container}>
      <div className={classes.title}>
        <h1 onClick={(e) => navigation("/notification")}>Notifications</h1>
        <Tooltip title="Refresh notifications">
          <RefreshOutlined />
        </Tooltip>
      </div>
      <div className={classes.notification__wrapper}>
        {notifications.map((notification, index) => (
          <SingleNotification data={notification} key={index} />
        ))}
      </div>
    </div>
  );
};

const SingleNotification = ({ data }) => {
  return (
    <div className={classes.notification}>
      <div className={classes.notification__icon}>
        <Avatar
          sx={{ background: "#fff", color: "#2b2b2b", padding: "0.5rem" }}
        >
          <FeatherIcon icon="box" />
        </Avatar>
      </div>
      <div className={classes.content}>
        <h6>
          {data.title} <Chip label="Small" size="small" variant="outlined" />
        </h6>
        <p>{data.description}</p>
      </div>
      <p>
        {data.time.toLocaleString("en-US", {
          minute: "numeric",
          hour: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
};
export default NotificationComp;
