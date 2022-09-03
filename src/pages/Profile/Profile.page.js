import React from "react";
import { Route, Routes } from "react-router";
import ProfileComponent from "../../component/ProfileComponent/Profile.comp";
import ProfileInformationComponent from "../../component/ProfileInformation/ProfileInformation.comp";
import PageHeadingLink from "./../../component/PageHeadingLinks/PageHeadingLinks.comp";
import ProfileAccount from "./../../component/Profile_Account/ProfileAccount.comp";

const ProfilePage = () => {
  let heading = ["account", "information_details"];
  return (
    <div style={{ marginRight: "1rem" }}>
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<ProfileComponent />} />
        <Route path="/account" element={<ProfileAccount />} />
        <Route
          path="information_details"
          element={<ProfileInformationComponent />}
        />
      </Routes>
    </div>
  );
};

export default ProfilePage;
