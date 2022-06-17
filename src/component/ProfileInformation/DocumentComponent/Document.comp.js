import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import classes from "./Document.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
const DocumentComponent = ({ name, verified, data  }) => {
  const [info, setInfo] = useState({ ...data });

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
            {Object.keys(info).map((key, index) => {
              if (info[key] === null) {
                return (
                  <>
                    <h5>{key}</h5>
                    <InputCreator
                      name={key}
                      key={index}
                      index={index}
                      type={key}
                      onChange={(e) =>
                        setInfo({ ...info, [key]: e.target.value })
                      }
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <h5>{key}</h5>
                    <div className={classes.image__input__container}>
                      {Object.keys(info[key]).map((k, v) => (
                        <InputCreator
                          name={k}
                          key={v}
                          index={v}
                          type={key}
                          onChange={(e) =>
                            setInfo({
                              ...info,
                              [key]: { ...info[key], [k]: e.target.value },
                            })
                          }
                        />
                      ))}
                    </div>
                  </>
                ); 
              }
            })}
          </form>
          {(info.images.front || info.images.back) && (
            <div className={classes.image__display}>
              <img src={info.images.front} alt="front" />
              <img src={info.images.back} alt="back" />
            </div>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const InputCreator = ({ name, index, type, onChange }) => {
  if (type === "images") {
    return (
      <div className={classes.image__group}>
        <label htmlFor={name}>{name}</label>
        <input id={name} type="file" placeholder={name} onChange={onChange} />
      </div>
    );
  } else
    return (
      <>
        <input
          id={name}
          name={name}
          type="text"
          placeholder={name}
          onChange={onChange}
        />
      </>
    );
};

export default DocumentComponent;
