import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import ImageContainerComponent from "./ImageContainer/ImageContainer.comp";
import DetailsContainerComponent from "./DefailtContainer/DetailsContainer.comp";
import ProfileDataFetch from "../../store/actions/Profile/ProfileData.fetch";
import { Spinner } from "react-bootstrap";
const ProfileComponent = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await dispatch(ProfileDataFetch());
    if (!data) return;
    setDatas({ ...data });
  };

  const handleUserDataUpdate = (type, data) => {
    if (type === "Account") {
      setDatas({ ...datas, account: { ...datas.account, ...data } });
    }
    if (type === "Contact") {
      setDatas({ ...datas, contact: { ...datas.contact, ...data } });
    }
  };
  return (
    <div className={classes.profile__component}>
      <div className={classes.profileImage}>
        <ImageContainerComponent user={user} />
      </div>
      <div className={classes.profileDetails}>
        {datas ? (
          <>
            <DetailsContainerComponent
              title={"Account"}
              data={datas.account}
              update={handleUserDataUpdate}
            />
            <DetailsContainerComponent
              title={"Contact"}
              data={datas.contact}
              update={handleUserDataUpdate}
            />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
