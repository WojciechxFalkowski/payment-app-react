import React, { Fragment } from "react";
import { H4 } from "./RecentActivity.css";
import { TransactionTable } from "components";
const RecentActivity = () => {
  const transactionNumber = 5;
  return (
    <Fragment>
      <H4>Recent activity ({transactionNumber})</H4>
      <TransactionTable
        activateInput={false}
        transactionNumber={transactionNumber}
      />
    </Fragment>
  );
};

export default RecentActivity;
