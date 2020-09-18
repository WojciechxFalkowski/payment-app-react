import React, { Fragment } from "react";
import { Chart } from "components";
import {
  getLastDayTransactionMoney,
  getLastDayHours,
  getLastWeekTransactionMoney,
  getLastWeekDays,
} from "utils/transactionFunctions";
import { Wrapper } from "./Balances.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const Balances = ({ transactions }) => {
  const { t } = useTranslation();
  const specyfication = [
    {
      type: "line",
      data: {
        labels: getLastDayHours(),
        datasets: [
          {
            label: t("Money"),
            data: getLastDayTransactionMoney(transactions),
            backgroundColor: "rgba(255, 99, 132, 0.4)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: t("Last 24 hours"),
          fontSize: 14,
        },
        legend: {
          display: false,
          labels: {
            fontColor: "rgb(255, 99, 132)",
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                lineHeight: 1.6,
                callback: function (value, index, values) {
                  return value + " $";
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "line",
      data: {
        labels: getLastWeekDays(),
        datasets: [
          {
            label: t("Money"),
            data: getLastWeekTransactionMoney(transactions),
            backgroundColor: "rgba(255, 99, 132, 0.4)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: t("Current week"),
          fontSize: 14,
        },
        legend: {
          display: false,
          labels: {
            fontColor: "rgb(255, 99, 132)",
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                lineHeight: 1.6,
                callback: function (value, index, values) {
                  return value + " $";
                },
              },
            },
          ],
        },
      },
    },
  ];
  return (
    <Fragment>
      <Wrapper>
        <Chart specification={specyfication[0]} />
        <Chart specification={specyfication[1]} />
      </Wrapper>
    </Fragment>
  );
};

export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Balances);
