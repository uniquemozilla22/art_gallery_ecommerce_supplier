import styled from "@emotion/styled";
import {
  FavoriteBorderOutlined,
  HeartBrokenOutlined,
} from "@mui/icons-material";
import { fontSize } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleAuctionPage = () => {
  const ImageLinks = [
    "https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg",
    "https://image.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg",
  ];
  const [activeImage, setActiveImage] = useState(ImageLinks[0]);

  return (
    <Wrapper>
      <ImageContainer>
        <ActiveImageContainer>
          <ActiveImage src={activeImage} />
        </ActiveImageContainer>
        <GroupImage className={"showOnHover"}>
          {ImageLinks.map((image, index) => (
            <SmallImage
              active={activeImage === image}
              src={image}
              key={index}
              onClick={(e) => setActiveImage(image)}
            />
          ))}
        </GroupImage>
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const ImageContainer = styled.div({
  width: "100vw",
  height: "90vh",
  background: "#transparent",
  position: "relative",
  zIndex: "0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  ":hover .showOnHover": {
    opacity: "1",
  },
});
const ActiveImageContainer = styled.div({
  height: "80%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const GroupImage = styled.div({
  display: "flex",
  gap: "1rem",
  opacity: "0",
  transition: "opacity 0.1s ease-in",
});

const ActiveImage = styled.img({
  borderRadius: "5px",
});
const SmallImage = styled.img((props) => ({
  height: "100px",
  weight: "100px",
  borderRadius: "5px",
  opacity: props.active ? "1" : "0.7",
  transition: "opacity 0.2s ease-in",
  ":hover": {
    opacity: "1",
  },
}));

export default SingleAuctionPage;
