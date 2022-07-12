import styled from "@emotion/styled";
import { Add, CancelOutlined, ThumbUpSharp } from "@mui/icons-material";
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
      <ContentContainer>
        <TitleContainer>
          <Title>
            <Heading>One</Heading>
            <Like>
              <ThumbUpSharp /> 99
            </Like>
          </Title>
          <Actions>
            <Button primary>
              {" "}
              <Add />
              Add Bid Time
            </Button>
            <Button primary danger>
              <CancelOutlined /> End Auction
            </Button>
          </Actions>
        </TitleContainer>
        <Information>
          <DetailsContainer>
            <Detail>
              28 x21 In. ( 71.12 X 53.34 cm)
              <br /> Frame: 34 x 28 x 2 in (86.36 x 71.12 x5.06 cm) Singed{" "}
              <br />
              Dated , and Numberd in Pencil
            </Detail>
            <BiddingDetail>
              <BidInfo>
                Ending <Span>4 Days 12 Hours 8 mins</Span>
              </BidInfo>
              <BidInfo>
                Estimated : <Span>NRS 14,000 - NRS 20,000</Span>
              </BidInfo>
              <BidInfo>
                Current <Span>NRS 20,000</Span>
              </BidInfo>
            </BiddingDetail>
            <Tags>
              <Container>
                <DetailTitle>Tags</DetailTitle>
                <Links>
                  <Linked to={"wallpaper"}>Wallpaper</Linked>
                  <Linked to={"wallpaper"}>Art</Linked>
                  <Linked to={"wallpaper"}>Painting</Linked>
                </Links>
              </Container>
              <Container>
                <DetailTitle>Category</DetailTitle>
                <Links>
                  <Linked to={"wallpaper"}>Wallpaper</Linked>
                </Links>
              </Container>
            </Tags>
          </DetailsContainer>
          <Bidding></Bidding>
        </Information>
      </ContentContainer>
    </Wrapper>
  );
};

const Tags = styled.div({});
const Container = styled.div({});
const Links = styled.div({});
const Linked = styled(Link, (props) => ({
  color: "#2b2b2b",
}));

const DetailTitle = styled.h4({});

// Container
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
const ContentContainer = styled.div({});
const TitleContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 1rem",
});
const Like = styled.div({});
const Title = styled.div({});
const Actions = styled.div({
  gap: "1rem",
});
const Information = styled.div({});
const DetailsContainer = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  margin: "0 1rem",

  "& > div": {
    flex: "1",
  },
});
const Detail = styled.div({});
const Bidding = styled.div({});
const BiddingDetail = styled.div({});

// Components
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

const ActiveImage = styled.img({
  borderRadius: "5px",
});

const Button = styled.button((props) => ({
  color: props.primary ? (props.danger ? "#FF5959" : "#f8f8f8") : "#676FA3",
  background: props.primary
    ? props.danger
      ? "transparent"
      : "#676FA3"
    : "transparent",
  border: "none",
  padding: "1rem 2rem",
  borderRadius: "5px",
}));

// Typography
const Heading = styled.h2({
  fontsize: "2rem",
  fontWeight: "bold",
});

const BidInfo = styled.p({});

const Span = styled.span({});

export default SingleAuctionPage;
