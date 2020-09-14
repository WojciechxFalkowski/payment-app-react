import React from "react";
import { Wrapper, H1, P } from "./Recipients.css";
import { Link } from "react-router-dom";
import { List } from "./components";
import { useTranslation } from "react-i18next";

const Recipients = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <H1>{t("Contact List")}</H1>
      <P>
        <Link to="/recipients/add">{t("add new contact")}</Link>
      </P>
      <List />
    </Wrapper>
  );
};

export default Recipients;
