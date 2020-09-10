import React, { Fragment } from "react";
import { Chart } from "components";
import {
  getLastDayTransactionMoney,
  getLastDayHours,
  getLastWeekTransactionMoney,
  getLastWeekDays,
} from "utils/transactionFunctions";
import { connect } from "react-redux";
const Balances = ({ transactions }) => {
  const specyfication = [
    {
      type: "line",
      data: {
        labels: getLastDayHours(),
        datasets: [
          {
            label: "Money",
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
          text: "Last 24 hours",
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
              },
            },
          ],
        },
      },
    },
    {
      type: "line",
      data: {
        labels: getLastWeekTransactionMoney(transactions),
        datasets: [
          {
            label: "Money",
            data: getLastWeekDays(),
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
          text: "Week",
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
              },
            },
          ],
        },
      },
    },
  ];
  return (
    <Fragment>
      <Chart specification={specyfication[0]} />
      <Chart specification={specyfication[1]} />
    </Fragment>
  );
};

export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Balances);
