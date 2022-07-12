import styled from "@emotion/styled";
import {
  FavoriteBorderOutlined,
  HeartBrokenOutlined,
} from "@mui/icons-material";
import { fontSize } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SingleAuctionPage = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <ActiveImage
          src={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
        />
        <GroupImage>
          <SmallImage
            src={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
          />
          <SmallImage
            src={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
          />
          <SmallImage
            src={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
          />
        </GroupImage>
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const ImageContainer = styled.div({
  width: "100%",
  height: "90vh",
  background: "#transparent",
  position: "relative",
  zIndex: "-1",
});

const GroupImage = styled.div({
  position: "absolute",
  right: "50%",
  bottom: "0",
  transform: "translate(-50%,-50%)",
});

const ActiveImage = styled.img({
  position: "absolute",
  height: "80%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "5px",
});
const SmallImage = styled.img({
  height: "100px",
  weight: "100px",
});

export default SingleAuctionPage;
