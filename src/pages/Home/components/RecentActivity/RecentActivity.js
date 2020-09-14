import React, { Fragment } from "react";
import { H4 } from "./RecentActivity.css";
import { TransactionTable } from "components";
import { useTranslation } from "react-i18next";
const RecentActivity = () => {
  const transactionNumber = 5;
  const { t } = useTranslation();
  return (
    <Fragment>
      <H4>
        {t("Recent activity")} ({transactionNumber})
      </H4>
      <TransactionTable
        activateInput={false}
        transactionNumber={transactionNumber}
      />
    </Fragment>
  );
};

export default RecentActivity;
