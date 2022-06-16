import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";
import DocumentComponent from "./DocumentComponent/Document.comp";

const ProfileInformationComponent = () => {
  const [expand, setExpand] = useState("");

  const handleChange = (expand) => setExpand(expand);

  return (
    <div className={classes.product__information__container}>
      <div className={classes.title__container}>
        <h3>Documentation</h3>
      </div>
      <div className={classes.verified__documents}>
        <DocumentComponent
          name="Personal Identity Card"
          verified={true}
          data={{ id: null, images: { front: null, back: null } }}
        />
      </div>
    </div>
  );
};

export default ProfileInformationComponent;
