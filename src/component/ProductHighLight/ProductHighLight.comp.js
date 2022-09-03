import styled from "@emotion/styled";
import { ChevronRight, ThumbUpOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
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
      <ListWrapper>
        {data.type.map((type, index) => (
          <ProductSpots {...type} key={index} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const ProductSpots = ({ name, data }) => {
  console.log(data);
  return (
    <SpotsWrapper>
      <TitileSpots>
        {name} <ChevronRight />
      </TitileSpots>
      <SpotsLists>
        {data.map((element, index) => {
          return (
            <DataContainer key={index}>
              <Left>
                <Avatar
                  src={
                    element.image ||
                    element.user?.image ||
                    element.product?.image
                  }
                />
                <ImageName>
                  {element.user?.name || element.product?.name || element.name}
                </ImageName>
              </Left>
              <Right>
                {!element.bid &&
                  (element.likes ? (
                    <ThumbUpOutlined />
                  ) : (
                    <Avatar
                      src={element.product?.image || element.user?.image}
                    />
                  ))}

                <ImageName>
                  {element.bid && <SubTitle>Highest Bid</SubTitle>}
                  {element.likes || element.product?.name || element.bid}
                </ImageName>
              </Right>
            </DataContainer>
          );
        })}
      </SpotsLists>
    </SpotsWrapper>
  );
};

const Wrapper = styled.div({});
const TitileSpots = styled.div({
  fontSize: "1rem",
  fontWeight: "700",
  display: "flex",
  justifyContent: "space-between",
});
const Titile = styled.div({});
const DataContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "1rem 0 ",
  padding: "1rem",
  borderBottom: "0.5px solid #f8f8f8",
});
const SpotsWrapper = styled.div({
  padding: "1rem 2rem",
  flex: "1",
  background: "#E8EBFE",
  borderRadius: "5px",
});

const ListWrapper = styled.div({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "1rem",
});

const SubTitle = styled.h4({
  fontSize: "0.8rem",
  fontWeight: "900",
  margin: "0",
});
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

const Left = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
const Right = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const Image = styled.img({});
const ImageName = styled.p({
  margin: "0",
  textAlign: "right",
});

export default ProductHighLight;
