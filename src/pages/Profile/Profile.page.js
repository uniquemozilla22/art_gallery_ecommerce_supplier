import React from "react";
import { Route, Routes } from "react-router";
import PageHeadingLink from "./../../component/PageHeadingLinks/PageHeadingLinks.comp";

const ProfilePage = () => {
  let heading = ["account", "information_details"];
  return (
    <div>
      <PageHeadingLink link={heading} />
      <Routes>
        <Route path="/" element={<h1>profile</h1>} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
