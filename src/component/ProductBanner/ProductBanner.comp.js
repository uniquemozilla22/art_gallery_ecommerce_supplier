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
  flex: "1",
});

const Title = styled.h2({
  fontWeight: "700",
  fontSize: "1.5rem",
});

const Span = styled.span({
  color: "#FF5959",
});

const Paragraph = styled.p({
  fontWeight: "400",
  fontSize: "1.1rem",
});

const Image = styled.img({
  borderRadius: "1rem",
});

export default ProductBannerComponent;
