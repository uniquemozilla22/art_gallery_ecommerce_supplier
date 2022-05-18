import React from "react";
import { useSelector } from "react-redux";
import Greeting from "../Greeting/Greeting.comp";
import NotificationComp from "../Notification/Notification.comp";
import classes from "./HomeComponent.module.css";
import MultipleData from "./MultipleData/MultipleData.comp";
import SingleData from "./SingleData/SingleData.comp";

const HomeComponent = () => {
  const username = useSelector((state) => state.user.username);
  const data = [
    [
      { name: "orders", items: "900", icon: "box" },
      { name: "likes", items: "900", icon: "heart" },
      { name: "product_likes", items: "900", icon: "thumbs-up" },
      { name: "followers", items: "900", icon: "users" },
    ],
    [
      {
        name: "sales",
        subName: "Sales Today",
        items: "NRS 2000",
        icon: "dollar-sign",
        link: "sales",
      },
    ],
    [
      {
        name: "orders",
        subName: "Orders Today",
        items: "9",
        icon: "box",
        link: "orders",
      },
    ],
    [
      {
        name: "Likes",
        subName: "Likes Today",
        items: "9",
        icon: "thumbs-up",
        link: "likes",
      },
    ],
  ];
  return (
    <div className={classes.home___component}>
      <Greeting name={username} />
      <div className={classes.home__container}>
        <div className={classes.data__container}>
          {data
            .filter((item) => item.length > 1)
            .map((data, index) => (
              <MultipleData key={index} data={data} />
            ))}
          <div className={classes.single__data__container}>
            {data
              .filter((item) => item.length === 1)
              .map((data, index) => (
                <SingleData key={index} data={data} />
              ))}
          </div>
        </div>
        <div className={classes.notification__container}>
          <NotificationComp />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
