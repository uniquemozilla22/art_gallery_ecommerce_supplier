import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const AutionItemComponent = ({ image }) => {
  const time = new Date().toString;
  return (
    <CardContainer>
      <Image component="img" image={image} alt="Paella dish" />
      <CardContent>
        <ProductName>Product One</ProductName>
        <ProductBid>
          {parseInt(2000).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "NRS",
          })}
        </ProductBid>
        <Time>{new Date(time).toLocaleDateString()}</Time>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

const CardContainer = styled(Card)`
  max-width: 400px;
`;

const Image = styled(CardMedia)`
  height: 300px;
`;

const ProductName = styled.h3({
  margin: "0",
  fontSize: "1.5rem",
});
const ProductBid = styled.p({
  margin: "0",
});
const Time = styled.p({
  margin: "0",
  color: "#FF5959",
});

export default AutionItemComponent;
