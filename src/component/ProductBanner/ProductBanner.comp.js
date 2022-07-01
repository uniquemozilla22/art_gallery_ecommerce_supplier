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
  alignItems: "center",
  gap: "2rem",
});
const ConentContainer = styled.div({
  flex: "3",
});
const ProductContainer = styled.div({
  flex: "2",
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
  ":hover": {
    opacity: "1",
  },
});

const Button = styled.button((props) => ({
  background: "transparent",
  border: "1px solid #676FA3",
  color: "#676FA3",
  padding: "1rem 2rem",
  borderRadius: "5px",
  transition: "all 0.2s ease-in",
  ":hover": {
    background: props.primary ? "#676FA3" : "#000000",
    color: "#f8f8f8",
  },
}));

export default ProductBannerComponent;
