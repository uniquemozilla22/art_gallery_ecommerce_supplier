import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";
import DocumentComponent from "./DocumentComponent/Document.comp";
import { Spinner } from "react-bootstrap";

const ProfileInformationComponent = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Personal ID",
      data: { id: null, images: { front: null, back: null } },
      verification: "not verified",
    },
    {
      id: 2,
      name: "Pan Card",
      data: { id: null, name: null, images: { front: null, back: null } },
      verification: "not verified",
    },
  ]);

  const [expanded, setExpanded] = useState("");
  return (
    <div className={classes.product__information__container}>
      <div className={classes.title__container}>
        <h3>Documentation</h3>
      </div>
      <div className={classes.verified__documents}>
        {documents ? (
          documents.map((document, index) => (
            <DocumentComponent
              key={index}
              expanded={expanded === document.name}
              toExpand={() => setExpanded(document.name)}
              name={document.name}
              verified={document.verification === "verified"}
              data={document.data}
            />
          ))
        ) : (
          <Spinner />
        )}
        <div className={classes.add__documents__button}>
          Add Other Documents
        </div>
      </div>
    </div>
  );
};

export default ProfileInformationComponent;
