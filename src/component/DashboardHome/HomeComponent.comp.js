import React from "react";
import Greeting from "../Greeting/Greeting.comp";
import classes from "./HomeComponent.module.css";
import MultipleData from "./MultipleData/MultipleData.comp";
import SingleData from "./SingleData/SingleData.comp";

const HomeComponent = () => {
  const data = [
    [
      { name: "orders", items: "900" },
      { name: "likes", items: "900" },
      { name: "product_likes", items: "900" },
      { name: "followers", items: "900" },
    ],
    [{ name: "sales", subName: "Sales Today", items: "900" }],
    [{ name: "orders", subName: "Orders Today", items: "900" }],
    [{ name: "Likes", subName: "Likes Today", items: "900" }],
  ];
  return (
    <>
      <Greeting name="Phurba" />
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
        <div className={classes.notification__container}>notification</div>
      </div>
    </>
  );
};

export default HomeComponent;
