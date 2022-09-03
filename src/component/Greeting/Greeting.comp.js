import React from "react";
import classes from "./Greeting.module.css";

const Greeting = ({ name, balance }) => {
  const greetingTime = () => {
    const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
    const hour = new Date().getHours();
    if (hour < 12) return welcomeTypes[0] + "," + name?.split(" ")[0];
    else if (hour < 18) return welcomeTypes[1] + "," + name?.split(" ")[0];
    else return welcomeTypes[2] + "," + name?.split(" ")[0];
  };
  return (
    <div classname={classes.greeting}>
      <div className={classes.greeting__container}>
        <h2>
          {greetingTime()}
          <div>
            <span>Balance: </span>
            {balance.toLocaleString("en-IN", {
              style: "currency",
              currency: "NRS",
            })}
          </div>
        </h2>
        <p>See what happened to your products</p>
      </div>
    </div>
  );
};

export default Greeting;
