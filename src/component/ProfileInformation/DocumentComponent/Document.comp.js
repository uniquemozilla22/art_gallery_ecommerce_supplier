import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Document.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
const DocumentComponent = ({ name, verified, data, expanded, toExpand }) => {
  const [info, setInfo] = useState({ ...data });

  return (
    <Accordion
      onChange={() => toExpand()}
      className={classes.accordion__container}
      expanded={expanded}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        className={classes.accordion__title}
        s
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
                  <div key={index}>
                    <h5>{key}</h5>
                    <InputCreator
                      name={key}
                      index={index}
                      type={key}
                      onChange={(e) =>
                        setInfo({ ...info, [key]: e.target.value })
                      }
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
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
                  </div>
                );
              }
            })}
          </form>
          {(info.images.front || info.images.back) && (
            <div className={classes.image__display}>
              {info.images.front && <img src={info.images.front} alt="front" />}
              {info.images.back && <img src={info.images.back} alt="back" />}
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
