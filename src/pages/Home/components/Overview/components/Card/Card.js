import React from "react";
import {
  Wrapper,
  DivCard,
  Img,
  DivInformation,
  P,
  PMoney,
  A,
} from "./Card.css";
const Card = ({ item }) => {
  return (
    <Wrapper>
      <DivCard>
        <Img src={item.image} alt="" />
        <DivInformation>
          <P>{item.name}</P>
          <PMoney>{item.account}</PMoney>
        </DivInformation>
      </DivCard>
      <A href="#">View all</A>
    </Wrapper>
  );
};

export default Card;
