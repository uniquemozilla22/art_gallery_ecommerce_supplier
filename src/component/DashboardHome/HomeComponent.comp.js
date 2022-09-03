import React from "react";
import { useSelector } from "react-redux";
import Greeting from "../Greeting/Greeting.comp";
import NotificationComp from "../Notification/Notification.comp";
import classes from "./HomeComponent.module.css";
import MultipleData from "./MultipleData/MultipleData.comp";
import SingleData from "./SingleData/SingleData.comp";
import DoughnutChart from "./../Charts/Doughnut/Doughnut.comp";
import PieComponent from "./../Charts/Pie/Pie.comp";
import LineComponent from "../Charts/Line/Line.comp";

const HomeComponent = () => {
  const username = useSelector((state) => state.user.username);
  const data = [
    [
      { name: "orders", items: "900", icon: "box" },
      { name: "likes", items: "900", icon: "heart" },
      { name: "product_likes", items: "900", icon: "thumbs-up" },
      { name: "followers", items: "900", icon: "users" },
      { name: "Shipped Orders", items: "900", icon: "users" },
      { name: "Sales Orders", items: "900", icon: "users" },
      { name: "Product", items: "9", icon: "users" },
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

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={classes.home___component}>
      <Greeting name={username} balance={987722} />
      <div className={classes.home__container}>
        <div className={classes.data__container}>
          <div className={classes.multiple__data__container}>
            {data
              .filter((item) => item.length > 1)
              .map((data, index) => (
                <MultipleData key={index} data={data} />
              ))}
          </div>

          <div className={classes.single__data__container}>
            {data
              .filter((item) => item.length === 1)
              .map((data, index) => (
                <SingleData key={index} data={data} />
              ))}
          </div>
          <div className={classes.line__chart__container}>
            <div className={classes.title}>
              <h3>Product By Category</h3>
            </div>
            <LineComponent
              name={"Product By Category"}
              labels={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
              ]}
              data={[
                {
                  label: "Category One",
                  data: [10, 20, 30, 45, 50, 20, 10, 40],
                },
                {
                  label: "Category 2",
                  data: [20, 30, 40, 50, 65, 90, 10, 20],
                },
              ]}
            />
          </div>
          <div className={classes.doughnut__chart__container}>
            <div className={classes.title}>
              <h3>Sales By Product</h3>
            </div> 
            <DoughnutChart
              name={"Product By Category"}
              labels={["one", "two", "three", "four"]}
              data={[1, 2, 3, 4]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
