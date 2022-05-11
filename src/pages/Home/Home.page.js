import React from "react";
import PageHeadingLink from "../../component/PageHeadingLinks/PageHeadingLinks.comp";

const Homepage = () => {
  let heading = ["home", "products", "profile"];
  return (
    <>
      <PageHeadingLink link={heading} />
    </>
  );
};

export default Homepage;
