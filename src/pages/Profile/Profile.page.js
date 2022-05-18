import React from "react";
import { Route, Routes } from "react-router";
import ProfileComponent from "../../component/ProfileComponent/Profile.comp";
import PageHeadingLink from "./../../component/PageHeadingLinks/PageHeadingLinks.comp";

const ProfilePage = () => {
  let heading = ["account", "information_details"];
  return (
    <div>
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<ProfileComponent />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
