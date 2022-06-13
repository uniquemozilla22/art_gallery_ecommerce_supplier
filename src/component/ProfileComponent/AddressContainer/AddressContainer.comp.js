import {
  Edit,
  EditAttributes,
  EditAttributesOutlined,
} from "@mui/icons-material";
import { Modal, Toolbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./AddressContainer.module.css";

const AddressContainer = ({ data, update }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModalShow = (address) => {
    setModalData({ ...address });
    setModalShow(true);
  };

  return (
    <div className={classes.address__container}>
      <div className={classes.title}>
        <h4>Address</h4>
      </div>
      <div className={classes.address__wrapper}>
        <div
          className={classes.address}
          onClick={() => handleModalShow({ ...data })}
        >
          <h2>{"Gathhaghar"}</h2>
          <p>
            <p>
              {"Bagmati Province"} {"44600"} {"Gathaghar area"},{"Nepal"}
            </p>
            <p>Contact: {"9846779494"}</p>
            Landmark : <span>{"Opposite of Tarkari bazar"}</span>
          </p>
          <div className={classes.icon}>
            <Tooltip title="Edit Address">
              <Edit onClick={() => handleModalShow({ ...data })} />
            </Tooltip>
          </div>
        </div>
      </div>
      <Modal open={modalShow} onClose={() => setModalShow(false)}>
        <div className={classes.modal__body}>
          <FormCreatorAddress
            data={modalData}
            updateData={update}
            addData={() => console.log("adding feature")}
            cancel={() => setModalShow(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export const FormCreatorAddress = ({ data, updateData, addData, cancel }) => {
  const [address, setAddress] = useState(data);

  const [countriesList, setCountriesList] = useState(null);
  const [stateList, setStateList] = useState(null);
  const [districtList, setDistrictList] = useState(null);
  const [regionList, setRegionList] = useState(null);

  const dispatch = useDispatch();

  //   const getCountryList = async () => {
  //     const countries = await dispatch(getCountries());
  //     setCountriesList(countries);
  //   };

  //   const getStatesInCountry = async (id) => {
  //     const statesList = await dispatch(getState(id));
  //     setStateList(statesList);
  //   };

  //   const getDistrictInState = async (id) => {
  //     const distrctLists = await dispatch(getDistrict(id));
  //     setDistrictList(distrctLists);
  //   };

  //   const getRegionInDistrict = async (id) => {
  //     const regionLists = await dispatch(getRegion(id));
  //     setRegionList(regionLists);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
      updateData(address);
    } else {
      addData(address);
    }
  };

  //   useEffect(() => {
  //     getCountryList();
  //     if (address?.country?.id) {
  //       getStatesInCountry(address?.country?.id);
  //     }
  //     if (address?.state?.id) {
  //       getDistrictInState(address?.state?.id);
  //     }
  //     if (address?.district?.id) {
  //       getRegionInDistrict(address?.district?.id);
  //     }
  //   }, []);
  return (
    <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder={address?.name || "Name"}
        name={address?.name}
        value={address?.name}
        onChange={(e) => {
          setAddress({ ...address, name: e.target.value });
        }}
        required
      />
      <select
        value={
          address?.country &&
          JSON.stringify({
            id: address?.country?.id,
            name: address?.country?.name,
          })
        }
        onChange={(e) => {
          //   getStatesInCountry(JSON.parse(e.target.value).id);
          setAddress({ ...address, country: JSON.parse(e.target.value) });
        }}
      >
        {countriesList && countriesList.length !== 0 && (
          <>
            <option disabled selected>
              ---Select Your Country---
            </option>
            {countriesList.map((country, index) => (
              <option
                value={JSON.stringify({ id: country.id, name: country.name })}
                name={country.name}
                key={index}
              >
                {country.name}
              </option>
            ))}
          </>
        )}
      </select>
      {address && address?.country && (
        <select
          value={
            address?.state &&
            JSON.stringify({
              id: address?.state?.id,
              name: address?.state?.name,
            })
          }
          onChange={(e) => {
            // getDistrictInState(JSON.parse(e.target.value).id);
            setAddress({ ...address, state: JSON.parse(e.target.value) });
          }}
        >
          {stateList && (
            <>
              <option disabled selected>
                ---Select Your State/ Province---
              </option>
              {stateList.map((state, index) => (
                <option
                  value={JSON.stringify({ id: state.id, name: state.name })}
                  name={state.name}
                  key={index}
                >
                  {state.name}
                </option>
              ))}
            </>
          )}
        </select>
      )}
      {address && address?.state?.id && (
        <select
          value={
            address?.district &&
            JSON.stringify({
              id: address?.district?.id,
              name: address?.district?.name,
            })
          }
          onChange={(e) => {
            // getRegionInDistrict(JSON.parse(e.target.value).id);
            setAddress({ ...address, district: JSON.parse(e.target.value) });
          }}
        >
          {districtList && (
            <>
              <option disabled selected>
                ---Select Your State/ District---
              </option>
              {districtList.map((district, index) => (
                <option
                  value={JSON.stringify({
                    id: district.id,
                    name: district.name,
                  })}
                  name={district.name}
                  key={index}
                >
                  {district.name}
                </option>
              ))}
            </>
          )}
        </select>
      )}
      {address && address?.district?.id && (
        <select
          value={
            address.region &&
            JSON.stringify({
              id: address?.region?.id,
              name: address?.region?.name,
            })
          }
          onChange={(e) => {
            setAddress({ ...address, region: JSON.parse(e.target.value) });
          }}
        >
          {regionList && (
            <>
              <option disabled selected>
                ---Select Your Region---
              </option>
              {regionList.map((region, index) => (
                <option
                  value={JSON.stringify({
                    id: region.id,
                    name: region.name,
                  })}
                  name={region.name}
                  key={index}
                >
                  {region.name}
                </option>
              ))}
            </>
          )}
        </select>
      )}
      <input
        type="number"
        placeholder={address?.postal_code || "Postal Code"}
        name={address?.postal_code}
        value={address?.postal_code}
        onChange={(e) =>
          setAddress({ ...address, postal_code: e.target.value })
        }
        required
      />
      <input
        type="number"
        placeholder={address?.mobile_number || "Mobile Number"}
        name={address?.mobile_number}
        value={address?.mobile_number}
        onChange={(e) =>
          setAddress({ ...address, mobile_number: e.target.value })
        }
        required
      />
      <textarea
        type="textarea"
        placeholder={address?.landmark || "Landmark"}
        name={address?.landmark || ""}
        onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
        rows="2"
        required
        value={address?.landmark}
      />
      <div className={classes.buttons__container}>
        <input type="submit" value="Submit" />
      </div>
      <div className={classes.cancel__container} onClick={(e) => cancel()}>
        Cancel
      </div>
    </form>
  );
};

export default AddressContainer;
