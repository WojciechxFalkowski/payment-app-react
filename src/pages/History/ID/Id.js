import React from "react";
import { Wrapper, Arrow, P, Span } from "./Id.css";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { formatDate } from "utils/date";
const Id = ({ transactions }) => {
  const { t } = useTranslation();
  let { id } = useParams();
  const history = useHistory();
  const index = transactions.findIndex(
    (transaction) => transaction.account_id === id
  );
  const {
    account_id,
    transaction,
    amount,
    iso_currency_code,
    status,
    type_transaction,
    country,
    date,
    authorized_date,
  } = transactions[index];
  const handleArrowClick = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Arrow onClick={handleArrowClick}>
        <IoIosArrowBack />
      </Arrow>
      <P>
        {t("Transaction ID")}
        <Span>{account_id}</Span>
      </P>
      <P>
        {t("Transaction name")}
        <Span>{transaction}</Span>
      </P>
      <P>
        {t("Amount")}
        <Span>{formatCurrency(amount)}</Span>
      </P>
      <P>
        {t("Currency")}
        <Span>{iso_currency_code}</Span>
      </P>
      <P>
        Status<Span>{t(status)}</Span>
      </P>
      <P>
        {t("Type transaction")}
        <Span>{t(type_transaction)}</Span>
      </P>
      <P>
        {t("From")}
        <Span>{country}</Span>
      </P>
      <P>
        {t("Date")}
        <Span>{formatDate(date)}</Span>
      </P>
      <P>
        {t("Authorization date")}
        <Span>{formatDate(authorized_date)}</Span>
      </P>
    </Wrapper>
  );
};
export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Id);
