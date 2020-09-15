import React, { useState, Fragment } from "react";
import { Table, Tr, Th, Td, P, Span } from "./TransactionTable.css";
import { IoIosArrowDown } from "react-icons/io";

import { connect } from "react-redux";

import { formatCurrency } from "utils";

import { SearchInput } from "components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const TransactionTable = ({
  transactions,
  transactionNumber = transactions.length,
  activateInput,
}) => {
  const { t } = useTranslation();
  const tableNames = ["Transaction", "Amount", "Status", "Date"];
  const handleTitleClick = (nameTransaction) => {
    let states;
    nameTransaction = nameTransaction.toLowerCase();
    setFlaga(nameTransaction);
    if (flaga === nameTransaction) {
      let transactionCopy = newTransactions.reverse();
      setTransactions(new Array(...transactionCopy));

      ++state[nameTransaction];
      setState(state);
    } else {
      states = {
        transaction: 0,
        amount: 0,
        status: 0,
        date: 0,
      };
      let transactionCopy = newTransactions;
      for (let j = 0; j < transactionCopy.length - 1; j++) {
        for (let i = 0; i < transactionCopy.length - 1; i++) {
          if (
            transactionCopy[i][nameTransaction] >=
            transactionCopy[i + 1][nameTransaction]
          ) {
          } else {
            let pom = transactionCopy[i];
            transactionCopy[i] = transactionCopy[i + 1];
            transactionCopy[i + 1] = pom;
          }
        }
      }

      setTransactions(transactionCopy);
      ++states[nameTransaction];
      setState(states);
    }
  };
  const handleChangeInput = (e) => {
    let transactionsIncludeValue = [];
    let value = e.target.value.toLocaleLowerCase();
    transactions.forEach((transaction) => {
      if (transaction.transaction.toLowerCase().includes(value)) {
        transactionsIncludeValue.push(transaction);
      } else if (transaction.amount.toString().includes(value)) {
        transactionsIncludeValue.push(transaction);
      } else if (transaction.status.toLowerCase().includes(value)) {
        transactionsIncludeValue.push(transaction);
      }
    });
    setTransactions(transactionsIncludeValue);
  };
  const [newTransactions, setTransactions] = useState(
    transactions.slice(0, transactionNumber)
  );
  const [flaga, setFlaga] = useState("");

  const [state, setState] = useState({
    transaction: 0,
    amount: 0,
    status: 0,
    date: 0,
  });

  return (
    <Fragment>
      {activateInput && <SearchInput onChange={handleChangeInput} />}
      <Table>
        <tbody>
          <Tr>
            {tableNames.map((th, index) => (
              <Th key={th} onClick={() => handleTitleClick(th)}>
                {t(th.toUpperCase())}
                <Span state={state[tableNames[index].toLocaleLowerCase()]}>
                  <IoIosArrowDown />
                </Span>
              </Th>
            ))}
          </Tr>
          {newTransactions.map((transaction) => {
            return (
              <Tr key={transaction.account_id}>
                <Td>
                  <Link to={"history/" + transaction.account_id}>
                    {transaction.transaction}
                  </Link>
                </Td>
                <Td>{formatCurrency(transaction.amount)}</Td>
                <Td>
                  <P status={transaction.status}>{t(transaction.status)}</P>
                </Td>
                <Td>{transaction.authorized_date.toDateString()}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(TransactionTable);
