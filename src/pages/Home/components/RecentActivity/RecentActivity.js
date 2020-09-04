import React, { Fragment } from "react";
import { H4 } from "./RecentActivity.css";
import { TransactionTable } from "components";
const RecentActivity = () => {
  return (
    <Fragment>
      <H4>Recent activity (5)</H4>
      <TransactionTable />
    </Fragment>
  );
};

export default RecentActivity;
