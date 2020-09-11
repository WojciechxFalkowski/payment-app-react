import React from "react";
import { Wrapper, Arrow, P, Span } from "./Id.css";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import { IoIosArrowBack } from "react-icons/io";
const Id = ({ transactions }) => {
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
        Transaction ID<Span>{account_id}</Span>
      </P>
      <P>
        Transaction name<Span>{transaction}</Span>
      </P>
      <P>
        Amount<Span>{formatCurrency(amount)}</Span>
      </P>
      <P>
        Currency<Span>{iso_currency_code}</Span>
      </P>
      <P>
        Status<Span>{status}</Span>
      </P>
      <P>
        Type transaction<Span>{type_transaction}</Span>
      </P>
      <P>
        From<Span>{country}</Span>
      </P>
      <P>
        Date<Span>{date.toDateString()}</Span>
      </P>
      <P>
        Authorization date<Span>{authorized_date.toDateString()}</Span>
      </P>
    </Wrapper>
  );
};
export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Id);
