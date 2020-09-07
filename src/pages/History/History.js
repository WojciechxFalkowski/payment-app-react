import React, { Fragment } from "react";
import { TransactionTable } from "components";

const History = () => {
  return (
    <Fragment>
      <TransactionTable activateInput={true}></TransactionTable>
    </Fragment>
  );
};

export default History;
