import styled from "@emotion/styled";
import React from "react";
import AutionItemComponent from "../../../component/AuctionItem/AuctionItem.comp";

const ProductAuction = () => {
  return (
    <Wrapper>
      <Title>
        <Heading>Auctions</Heading>
        <Button>Start Aution</Button>
      </Title>
      <AutionContainer>
        <AutionItemComponent
          image={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
        />
        <AutionItemComponent
          image={
            "https://image.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg"
          }
        />
        <AutionItemComponent
          image={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
        />
        <AutionItemComponent
          image={
            "https://image.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg"
          }
        />
        <AutionItemComponent
          image={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
        />
        <AutionItemComponent
          image={
            "https://image.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg"
          }
        />
        <AutionItemComponent
          image={"https://m.media-amazon.com/images/I/713jNeMYLFL._SX425_.jpg"}
        />
        <AutionItemComponent
          image={
            "https://image.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg"
          }
        />
      </AutionContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  margin: " 0 1rem",
});
const Title = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "1rem 0",
});

const AutionContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(350px, 100%), 1fr));",
  flexWrap: "wrap",
  alignItems: "stretch",
  gap: "1rem",
});

const Heading = styled.h1({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const Button = styled.button({
  background: "transparent",
  color: "#676FA3",
  border: "1px solid #676FA3",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
});

export default ProductAuction;
