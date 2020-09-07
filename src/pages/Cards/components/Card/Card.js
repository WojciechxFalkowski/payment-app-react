import React from "react";
import { Wrapper, P, Span, Name, ExpiryDate, HolderDetails } from "./Card.css";
import { SiContactlesspayment } from "react-icons/si";

const Card = ({ nameBank, number, valid, img }) => {
  return (
    <Wrapper image={img}>
      <P>{nameBank}</P>
      <Span>
        <SiContactlesspayment />
      </Span>
      <Name>{number}</Name>
      <ExpiryDate>{valid}</ExpiryDate>
      <HolderDetails>Adam Nowak</HolderDetails>
    </Wrapper>
  );
};

export default Card;
