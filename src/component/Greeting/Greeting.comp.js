import React from "react";
import classes from "./Greeting.module.css";

const Greeting = ({ name }) => {
  const greetingTime = () => {
    const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
    const hour = new Date().getHours();
    if (hour < 12) return welcomeTypes[0];
    else if (hour < 18) return welcomeTypes[1];
    else return welcomeTypes[2];
  };
  return (
    <div className={classes.greeting__container}>
      <h2>
        {greetingTime()} , <span>{name.split(" ")[0]}</span>
      </h2>
      <p>See what happened to your products</p>
    </div>
  );
};

export default Greeting;
