import React from "react";
import { ExpandMore } from "@mui/icons-material";
import classes from "./Document.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
const DocumentComponent = ({ name, verified, data }) => {
  return (
    <Accordion className={classes.accordion__container}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        className={classes.accordion__title}
      >
        <h4>{name}</h4>
        {verified ? (
          <p className={classes.verified}>Verified</p>
        ) : (
          <p className={classes.not_verified}>Not Verified</p>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.accordion__form__container}>
          <form className={classes.card__registration}>
            {Object.keys(data).map((key, index) => {
              if (data[key] === null) {
                return (
                  <>
                    <h5>{key}</h5>
                    <InputCreator
                      name={key}
                      key={index}
                      index={index}
                      type={key}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <h5>{key}</h5>
                    <div className={classes.image__input__container}>
                      {Object.keys(data[key]).map((k, v) => (
                        <InputCreator name={k} key={v} index={v} type={key} />
                      ))}
                    </div>
                  </>
                );
              }
            })}
          </form>
          <div className={classes.image__display}>
            <img src={"./"} alt="front" />
            <img src={"./"} alt="back" />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const InputCreator = ({ name, index, type }) => {
  if (type === "images") {
    return (
      <div className={classes.image__group}>
        <label for={name}>{name}</label>
        <input id={name} type="file" placeholder={name} />
      </div>
    );
  } else
    return (
      <>
        <input id={name} name={name} type="text" placeholder={name} />
      </>
    );
};

export default DocumentComponent;
