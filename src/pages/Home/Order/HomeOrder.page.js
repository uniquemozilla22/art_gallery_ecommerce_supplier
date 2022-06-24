import React, { useState } from "react";
import classes from "./HomeOrderPage.module.css";
import SingleData from "../../../component/DashboardHome/SingleData/SingleData.comp";
import RecentComponent from "../../../component/RecentsComponent/RecentComponent.comp";
import DoughnutChart from "./../../../component/Charts/Doughnut/Doughnut.comp";
import LineComponent from "./../../../component/Charts/Line/Line.comp";
import { Doughnut } from "react-chartjs-2";

const OrderPage = () => {
  const [data, setData] = useState({
    singleData: {
      product_views: { count: 99, icon: "eye" },
      orders: { count: 5, icon: "box" },
      customers_interacted: { count: 99, icon: "users" },
    },
    recent_orders: [
      {
        title: "Order received",
        info: {
          name: "Yogesh Bhattarai",
          orderID: "988242134",
        },

        image:
          "https://www.mona.com.np/get-image/art_media_main/premman_photo1_1583989915.jpg",
      },
      {
        title: "Order received",
        info: {
          name: "Yogesh Bhandari",
          orderID: "988242134",
        },
      },
    ],
    charts: [
      {
        name: "Orders By Category",
        type: "line",
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
        data: [
          {
            label: "Category One",
            data: [10, 20, 30, 45, 50, 20, 10, 40],
          },
          {
            label: "Category 2",
            data: [20, 30, 40, 50, 65, 90, 10, 20],
          },
        ],
      },
      {
        name: "Orders By Category",
        type: "doughnut",
        labels: ["one", "two", "three", "four"],
        data: [
          {
            label: "Category One",
            data: [10, 20, 30, 45, 50, 20, 10, 40],
          },
          {
            label: "Category 2",
            data: [20, 30, 40, 50, 65, 90, 10, 20],
          },
        ],
      },
    ],
  });
  return (
    <div className={classes.order__page__container}>
      <div className={classes.single__data__container}>
        {Object.keys(data.singleData).map((keys, index) => (
          <SingleData
            key={index}
            data={[
              {
                name: keys,
                items: data.singleData[keys].count,
                icon: data.singleData[keys].icon,
              },
            ]}
          />
        ))}
      </div>
      <div className={classes.recent__orders}>
        <RecentComponent
          title="Recent Orders"
          data={data.recent_orders}
          link={"/orders"}
        />
      </div>
      {data.charts.map((chart, index) => {
        if (chart.type === "line")
          return <LineContainer {...chart} key={index} />;
        else if (chart.type === "doughnut")
          return <DoughnutContainer {...chart} key={index} />;
        else return <></>;
      })}
    </div>
  );
};

const LineContainer = (props) => {
  return (
    <div className={classes.line__chart__container}>
      <div className={classes.title}>
        <h3>{props.name}</h3>
      </div>
      <LineComponent {...props} />
    </div>
  );
};

const DoughnutContainer = (props) => {
  return (
    <div className={classes.doughnut__chart__container}>
      <div className={classes.title}>
        <h3>{props.name}</h3>
      </div>
      <DoughnutChart {...props} />
    </div>
  );
};

export default OrderPage;
