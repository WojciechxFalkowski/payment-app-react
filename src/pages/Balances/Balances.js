import React, { Fragment } from "react";
import { Chart } from "./components";
import {
  getLastDayTransactionMoney,
  getLastDayHours,
  getLastWeekTransactionMoney,
  getLastWeekDays,
} from "utils/transactionFunctions";
import { connect } from "react-redux";
const Balances = ({ transactions }) => {
  return (
    <Fragment>
      <Chart
        money={getLastDayTransactionMoney(transactions)}
        dates={getLastDayHours()}
        text="Last 24 hours"
      />
      <Chart
        money={getLastWeekTransactionMoney(transactions)}
        dates={getLastWeekDays()}
        text="Week"
      />
    </Fragment>
  );
};

export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Balances);
