import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";
import DocumentComponent from "./DocumentComponent/Document.comp";

const ProfileInformationComponent = () => {
  const verifiedDocuments = useState([
    {
      id: 1,
      name: "Personal ID",
      data: { id: null, images: { front: null, back: null } },
      verification: "not verified",
    },
  ]);
  return (
    <div className={classes.product__information__container}>
      <div className={classes.title__container}>
        <h3>Documentation</h3>
      </div>
      <div className={classes.verified__documents}>
        {verifiedDocuments.map((document, index) => (
          <DocumentComponent
            key={index}
            name={document.name}
            verified={document.verification === "verified"}
            data={document.data}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileInformationComponent;
