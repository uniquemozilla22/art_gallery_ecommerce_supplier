import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router";

const AutionItemComponent = ({ image, time }) => {
  let countDownDate = new Date(time).getTime();
  const [timer, setTimer] = useState("");

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setTimer(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setTimer("Expired");
    }
  }, 1000);

  const navigation = useNavigate();
  const gotoProduct = (id) => navigation("/products/auction/" + id);
  return (
    <CardContainer onClick={(e) => gotoProduct(1)}>
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
        <Time>{timer}</Time>
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
  box-shadow: none;
  box-shadow: 0 0 10px #2b2b2b10;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px #2b2b2b30;
  }
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
