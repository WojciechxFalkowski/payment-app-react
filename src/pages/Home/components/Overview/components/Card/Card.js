import React from "react";
import { Wrapper, DivCard, Img, DivInformation, P, PMoney } from "./Card.css";
import { formatCurrency } from "utils";
const Card = ({ item }) => {
  return (
    <Wrapper>
      <DivCard>
        <Img src={item.image} alt="" />
        <DivInformation>
          <P>{item.name}</P>
          <PMoney>{formatCurrency(item.account)}</PMoney>
        </DivInformation>
      </DivCard>
    </Wrapper>
  );
};

export default Card;
