import styled from "@emotion/styled";
import React, { useState } from "react";
import ProductBannerComponent from "../../../component/ProductBanner/ProductBanner.comp";

const ProductHomePage = () => {
  const [data, setData] = useState({
    banner: {
      title: "This is your start Product",
      content:
        "This product has become one of the most intresting product looking at the engagements from the product. You are one of the best in terms of likes, we wish you would have more success on the product. ",

      product: {
        name: "Product 1",
        id: 1,
        image:
          "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc=",
      },
    },
  });
  return (
    <Wrapper>
      <ProductBannerComponent data={data.banner} />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default ProductHomePage;
