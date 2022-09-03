import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ProductBannerComponent = ({ data }) => {
  const navigation = useNavigate();

  const ProductNavigation = (id) => navigation("/products/" + id);
  return (
    <Wrapper>
      <ConentContainer>
        <Title>
          <Span>WOW!</Span>
          <br />
          {data.title}
        </Title>
        <Paragraph>{data.content}</Paragraph>
        <ButtonContainer>
          <Button primary>Add Product</Button>
          <Button>See Product</Button>
        </ButtonContainer>
      </ConentContainer>
      <ProductContainer>
        <Tooltip title={data.product.name}>
          <Image
            src={data.product.image}
            onClick={() => ProductNavigation(data.product.id)}
          ></Image>
        </Tooltip>
      </ProductContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
});
const ConentContainer = styled.div({
  flex: "3",
});
const ProductContainer = styled.div({
  flex: "1",
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  gap: "2rem",
});

const Title = styled.h2({
  fontWeight: "700",
  fontSize: "1.5rem",
  margin: "0",
});

const Span = styled.span({
  color: "#FF5959",
});

const Paragraph = styled.p({
  fontWeight: "400",
  fontSize: "1.1rem",
});

const Image = styled.img({
  borderRadius: "5px",
  cursor: "pointer",
  opacity: "0.9",
  transition: "opacity 0.2s ease-in",
  width: "20vw",
  ":hover": {
    opacity: "1",
  },
  "@media(max-width:800px)": {
    width: "50vw",
    alignItems: "center",
    margin: " 1px auto",
  },
});

const Button = styled.button((props) => ({
  background: props.primary ? "#676FA3" : "transparent",
  border: props.primary ? "1px solid transparent" : "none",
  color: props.primary ? "#f8f8f8" : "#676FA380",
  padding: "1rem 2rem",
  borderRadius: "5px",
  transition: "all 0.2s ease-in",
  ":hover": {
    background: "transparent",
    color: "#676FA3",
    borderColor: "#676FA3",
  },
}));

export default ProductBannerComponent;
