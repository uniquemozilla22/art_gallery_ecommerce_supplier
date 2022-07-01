import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";

const ProductHighLight = ({ data }) => {
  const name = useSelector((state) => state.user.username);
  return (
    <Wrapper>
      <Titile>
        <Heading>
          Well Done , <Red>{name.split(" ")[0]} </Red>
        </Heading>
        <Content>{data.content}</Content>
      </Titile>
      
    </Wrapper>
  );
};

const ProductSpots = ({ name, data }) => {
  return (
    <SpotsWrapper>
      <Titile>{name}</Titile>
      <SpotsLists>
        {data.forEach((element) => {
          return (
            <>
              <Left>
                <Image></Image>
                <ImageName></ImageName>
              </Left>
              <Right></Right>
            </>
          );
        })}
      </SpotsLists>
    </SpotsWrapper>
  );
};

const Wrapper = styled.div({});
const Titile = styled.div({});

const SpotsWrapper = styled.div({});
const SpotsLists = styled.div({});

const Heading = styled.h3({
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0",
});
const Red = styled.span({
  color: "#FF5959",
  textTransform: "capitalize",
});
const Content = styled.p({
  fontSize: "1rem",
  fontWeight: "regular",
});

const Left = styled.div({});
const Right = styled.div({});

const Image = styled.img({});
const ImageName = styled.p({});

export default ProductHighLight;
