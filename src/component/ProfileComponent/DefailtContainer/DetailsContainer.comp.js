import { Modal } from "@mui/material";
import React, { useState } from "react";
import classes from "./DetailsContainer.module.css";

const DetailsContainerComponent = ({ title, data, update }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ key: null, value: null });

  const handleModalOpen = (data) => {
    if (
      data.value !== null &&
      (data.key === "email" || data.key === "username")
    )
      return;
    setModalData({ ...data });
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  const handleUpdate = ({ name, value }) => {
    update(title, { [name]: value });
  };

  return (
    <>
      <div className={classes.detail__container__wrapper}>
        <div className={classes.title}>
          <h4>{title}</h4>
        </div>
        <div className={classes.detail__container}>
          {Object.keys(data).map((key, index) => (
            <div
              className={classes.detail}
              key={index}
              onClick={() => handleModalOpen({ key, value: data[key] })}
            >
              <h5>{key.split("_").join(" ")}</h5>
              <p>{data[key] || "undefined"}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal open={showModal} onClose={handleModalClose}>
        <div className={classes.modal__body}>
          <FormCreator
            name={modalData.key}
            value={modalData.value}
            updateData={(data) => handleUpdate(data)}
            classes={classes}
          />
        </div>
      </Modal>
    </>
  );
};

export const FormCreator = ({ name, value, updateData }) => {
  const [data, setData] = useState({
    name,
    value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(data);
  };

  const handleInput = (e) => {
    setData({ ...data, value: e.target.value });
  };

  if (name.toLowerCase() === "gender") {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <select name={name} id={name} onChange={(e) => handleInput(e)}>
          <option value="Male" disabled>
            Select an Option
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Special">Special</option>
        </select>
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else if (
    name.toLowerCase() === "phone_no" ||
    name.toLowerCase() === "telephone_no" ||
    name.toLowerCase() === "alternative_no" ||
    name.toLowerCase() === "mobile_no"
  ) {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          placeholder={value}
          name={name}
          onChange={(e) => handleInput(e)}
        />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else if (name.toLowerCase() === "dob") {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="date"
          placeholder={new Date(value)}
          name={name}
          onChange={(e) => handleInput(e)}
        />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={value}
          name={name}
          onChange={(e) => handleInput(e)}
        />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
};

export default DetailsContainerComponent;
