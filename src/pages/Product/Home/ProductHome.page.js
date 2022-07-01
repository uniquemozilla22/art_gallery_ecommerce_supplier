import styled from "@emotion/styled";
import React, { useState } from "react";
import ProductBannerComponent from "../../../component/ProductBanner/ProductBanner.comp";
import ProductHighLight from "../../../component/ProductHighLight/ProductHighLight.comp";

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
    featuredProducts: {
      content:
        "These are some of the products that are being more engaging than others.",
      type: [
        {
          name: "Recent Orders",
          data: [
            {
              user: {
                name: "Yogesh Bhattarai",
                image:
                  "https://media.istockphoto.com/photos/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home-picture-id1321486723?b=1&k=20&m=1321486723&s=170667a&w=0&h=HLBKvNa6dOXbTp_1Hp57hdFjQ5zO-atmsf9YFfMlQFI=",
              },
              product: {
                name: "Product One",
                image:
                  "https://media.istockphoto.com/photos/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett-picture-id577949148?k=20&m=577949148&s=612x612&w=0&h=iukaE3sYvHROgJcNM6VumPkZkJw1U5B48FSiG9o7KrE=",
              },
            },
            {
              user: {
                name: "Ramu Chapagain",
                image:
                  "https://www.liveabout.com/thmb/Z0v5wfzDA-fOTkaL_ksqKkWHt5Y=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-667156305-59befb3daf5d3a00102437f8.jpg",
              },
              product: {
                name: "Product One",
                image:
                  "https://media.istockphoto.com/photos/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett-picture-id577949148?k=20&m=577949148&s=612x612&w=0&h=iukaE3sYvHROgJcNM6VumPkZkJw1U5B48FSiG9o7KrE=",
              },
            },
          ],
        },
        {
          name: "Most Liked Products",
          data: [
            {
              likes: "99",
              product: {
                name: "Product One",
                image:
                  "https://media.istockphoto.com/photos/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett-picture-id577949148?k=20&m=577949148&s=612x612&w=0&h=iukaE3sYvHROgJcNM6VumPkZkJw1U5B48FSiG9o7KrE=",
              },
            },
            {
              likes: "92",
              product: {
                name: "Product One",
                image:
                  "https://media.istockphoto.com/photos/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett-picture-id577949148?k=20&m=577949148&s=612x612&w=0&h=iukaE3sYvHROgJcNM6VumPkZkJw1U5B48FSiG9o7KrE=",
              },
            },
          ],
        },
        {
          name: "Ongoing Bids",
          data: [
            {
              name: "Product One",
              image:
                "https://media.istockphoto.com/photos/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home-picture-id1321486723?b=1&k=20&m=1321486723&s=170667a&w=0&h=HLBKvNa6dOXbTp_1Hp57hdFjQ5zO-atmsf9YFfMlQFI=",
              bid: 2000,
              time: new Date(2022, 8, 12),
            },
            {
              name: "Product Three",
              image:
                "https://media.istockphoto.com/photos/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home-picture-id1321486723?b=1&k=20&m=1321486723&s=170667a&w=0&h=HLBKvNa6dOXbTp_1Hp57hdFjQ5zO-atmsf9YFfMlQFI=",
              bid: 523,
              time: new Date(2022, 8, 15),
            },
          ],
        },
      ],
    },
  });
  return (
    <Wrapper>
      <ProductBannerComponent data={data.banner} />
      <ProductHighLight data={data.featuredProducts} />
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default ProductHomePage;
