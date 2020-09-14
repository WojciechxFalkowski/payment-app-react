import React from "react";
import { Wrapper, DivCard, Img, DivInformation, P, PMoney } from "./Card.css";
import { formatCurrency } from "utils";
import { useTranslation } from "react-i18next";
const Card = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <DivCard>
        <Img src={item.image} alt="" />
        <DivInformation>
          <P>{t(item.name)}</P>
          <PMoney>{formatCurrency(item.account)}</PMoney>
        </DivInformation>
      </DivCard>
    </Wrapper>
  );
};

export default Card;
