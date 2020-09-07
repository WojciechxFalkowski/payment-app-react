import React from "react";
import { Card } from "./components";
import { Wrapper } from "./Cards.css";
import ship from "images/cards/ship-640x438.jpg";
import shelby from "images/cards/shelby-640×350.jpg";
import plane from "images/cards/plane-640×426.jpg";
const Cards = () => {
  const images = [ship, shelby, plane];

  return (
    <Wrapper>
      <Card
        nameBank={"Polish Bank"}
        number={"0000 1111 2222 3333"}
        valid={"25/08"}
        img={images[0]}
      />
      <Card
        nameBank={"Millenium"}
        number={"1234 5678 9123 4567"}
        valid={"26/10"}
        img={images[1]}
      />
      <Card
        nameBank={"Santander"}
        number={"9999 5555 3322 123"}
        valid={"28/12"}
        img={images[2]}
      />
    </Wrapper>
  );
};

export default Cards;
