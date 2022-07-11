import styled from "@emotion/styled";
import React from "react";

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
            <Ending>
              Ending
              <Span> 4 Days 13 Hours 8 mins</Span>
            </Ending>
            <Estimate>
              Estimate <Span>12,000 - 20,000 NPR</Span>
            </Estimate>
            <Current>
              Current <Span>14,000 NPR</Span>
            </Current>
          </BiddingWrapper>
        </DetailsWrapper>
      </ContentWrapper>
      <DescriptionWrapper></DescriptionWrapper>
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
});
const ImageWrapper = styled.div({
  flex: "1",
  display: "grid",
  placeItems: "center",
});
const DetailsWrapper = styled.div({
  flex: "1",
});

const BiddingWrapper = styled.div({});

const Image = styled.img({});

const Title = styled.h2({
  fontSize: "2rem",
  fontWeight: "700",
});
const Ending = styled.p({
  fontSize: "1rem",
  fontWeight: "700",
  margin: "0",
});
const Estimate = styled.p({
  fontSize: "1rem",
  fontWeight: "700",
  margin: "0",
});

const Current = styled.p({
  fontSize: "1rem",
  fontWeight: "700",
  margin: "0",
});
const Span = styled.span({
  fontWeight: "400",
});
export default SingleAuctionPage;
