import React from "react";
import { Route, Routes } from "react-router";
import ProfileComponent from "../../component/ProfileComponent/Profile.comp";
import PageHeadingLink from "./../../component/PageHeadingLinks/PageHeadingLinks.comp";
import ProfileAccount from "./../../component/Profile_Account/ProfileAccount.comp";

const ProfilePage = () => {
  let heading = ["account", "information_details"];
  return (
    <div>
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<ProfileComponent />} />
        <Route path="/account" element={<ProfileAccount />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
