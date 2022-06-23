import React, { useState } from "react";
import classes from "./HomeOrderPage.module.css";
import SingleData from "../../../component/DashboardHome/SingleData/SingleData.comp";
import RecentComponent from "../../../component/RecentsComponent/RecentComponent.comp";

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
          link={"./orders"}
        />
      </div>
    </div>
  );
};

export default OrderPage;
