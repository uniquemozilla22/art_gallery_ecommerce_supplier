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
      <ContentWrapper>
        <ImageWrapper>
          <Image
            src={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
            alt={"Image"}
          />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>One</Title>
          <BiddingWrapper>
            <BiddingDetail>
              Ending
              <Span> 4 Days 13 Hours 8 mins</Span>
            </BiddingDetail>
            <BiddingDetail>
              Estimate <Span>12,000 - 20,000 NPR</Span>
            </BiddingDetail>
            <BiddingDetail>
              Current <Span>14,000 NPR</Span>
            </BiddingDetail>
          </BiddingWrapper>
          <DetailDescription>THis is the description Part</DetailDescription>
          <Like>
            <FavoriteBorderOutlined /> 99
          </Like>
          <HyperLink>
            <SubTitle>Tags</SubTitle>
            <Links></Links>
          </HyperLink>
          <HyperLink>
            <SubTitle>Category</SubTitle>
            <Links></Links>
          </HyperLink>
        </DetailsWrapper>
      </ContentWrapper>
      <DescriptionWrapper>THis is the description Part</DescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const DescriptionWrapper = styled.div({});
const ContentWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  flexWrap: "wrap",
  minHeight: "90vh",
});
const ImageWrapper = styled.div({
  flex: "1",
  display: "grid",
  placeItems: "center",
  borderRight: "1px solid #CACACA",
  height: "100%",
});
const DetailsWrapper = styled.div({
  flex: "1",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenely",
  gap: "1rem",
  flexDirection: "column",
});

const BiddingWrapper = styled.div({});

const Like = styled.div({});

const HyperLink = styled.div({});

const Image = styled.img({});

const DetailDescription = styled.p({
  fontSize: "1rem",
  fontWeight: "300",
});

const Title = styled.h2({
  fontSize: "2rem",
  fontWeight: "700",
});

const BiddingDetail = styled.p({
  fontSize: "1rem",
  fontWeight: "700",
  margin: "0",
  display: "flex",
  gap: "2rem",
});

const SubTitle = styled.h3({
  fontWeight: "700",
  fontSize: "1.5rem",
});

const Links = styled.div({});

const Linked = styled(Link);

const Span = styled.span({
  fontWeight: "400",
  textAlign: "right",
});
export default SingleAuctionPage;
