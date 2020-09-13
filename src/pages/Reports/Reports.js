import React from "react";
import { connect } from "react-redux";
import { Chart } from "components";
import {
  getDaysTransaction,
  getLastYearMonths,
  getLastYearMonthTransaction,
  getLastYearQuarterTransactions,
  getYearsTransaction,
} from "utils/transactionFunctions";
import { Wrapper } from "./Reports.css";
const Reports = ({ transactions }) => {
  const getDaysTrans = getDaysTransaction(transactions);
  const getMonth = getLastYearMonths();

  const lastYearMonthTransaction = getLastYearMonthTransaction(transactions);
  const yearsTransaction = getYearsTransaction(transactions);
  const lastYearQuarterTransactions = getLastYearQuarterTransactions(
    transactions
  );
  const specification = [
    {
      type: "bar",

      data: {
        labels: getDaysTrans.daysName,
        datasets: [
          {
            data: getDaysTrans.daysMoney,
            backgroundColor: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value < 0
                ? "rgba(230, 25, 75, 0.5)"
                : index % 2
                ? "rgba(0, 130, 200, 0.5)"
                : "rgba(0, 200,130 , 0.5)";
            },

            borderColor: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value < 0 ? "red" : index % 2 ? "blue" : "green";
            },
            borderWidth: 1,
            hoverBackgroundColor: [],
            hoverBorderColor: [],
            hoverBorderWidth: 3,
            weight: 1,
          },
        ],
      },

      options: {
        title: {
          display: true,
          text: getMonth[new Date().getMonth()],
        },
        legend: {
          display: false,
          labels: {},
          position: "right",
        },
      },
    },
    {
      type: "pie",

      data: {
        labels: lastYearMonthTransaction.name,
        datasets: [
          {
            data: lastYearMonthTransaction.money,
            backgroundColor: [
              "rgba(230, 25, 75, 0.2)",
              "rgba(245, 130, 48, 0.2)",
              "rgba(255, 225, 25, 0.2)",
              "rgba(210, 245,60, 0.2)",
              "rgba(60, 180, 75, 0.2)",
              "rgba(70, 240, 75, 0.2)",
              "rgba(0, 130, 200, 0.2)",
              "rgba(0, 0, 128, 0.2)",
              "rgba(145, 30, 180, 0.2)",
              "rgba(240, 30, 180, 0.2)",
              "rgba(128, 128, 128, 0.2)",
              "rgba(0, 0, 0, 0.2)",
            ],
            borderColor: [
              "rgba(230, 25, 75, 0.8)",
              "rgba(245, 130, 48, 0.8)",
              "rgba(255, 225, 25, 0.8)",
              "rgba(210, 245,60,0.8)",
              "rgba(60, 180, 75, 0.8)",
              "rgba(70, 240, 75,0.8)",
              "rgba(0, 130, 200,0.8)",
              "rgba(0, 0, 128, 0.8)",
              "rgba(145, 30, 180, 0.8)",
              "rgba(240, 30, 180, 0.8)",
              "rgba(128, 128, 128, 0.8)",
              "rgba(0, 0, 0, 0.8)",
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              "rgba(230, 25, 75, 0.5)",
              "rgba(245, 130, 48, 0.5)",
              "rgba(255, 225, 25, 0.5)",
              "rgba(210, 245,60, 0.5)",
              "rgba(60, 180, 75, 0.5)",
              "rgba(70, 240, 75, 0.5)",
              "rgba(0, 130, 200, 0.5)",
              "rgba(0, 0, 128, 0.5)",
              "rgba(145, 30, 180, 0.5)",
              "rgba(240, 30, 180, 0.5)",
              "rgba(128, 128, 128, 0.5)",
              "rgba(0, 0, 0, 0.5)",
            ],
            hoverBorderColor: [
              "rgba(230, 25, 75, 1)",
              "rgba(245, 130, 48, 1)",
              "rgba(255, 225, 25, 1)",
              "rgba(210, 245,60,1)",
              "rgba(60, 180, 75, 1)",
              "rgba(70, 240, 75,1)",
              "rgba(0, 130, 200,1)",
              "rgba(0, 0, 128, 1)",
              "rgba(145, 30, 180, 1)",
              "rgba(240, 30, 180, 1)",
              "rgba(128, 128, 128, 1)",
              "rgba(0, 0, 0, 1)",
            ],
            hoverBorderWidth: 3,
            weight: 1,
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: "Monthly balance",
        },
        legend: {
          position: "right",
        },
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    },
    {
      type: "pie",

      data: {
        labels: lastYearQuarterTransactions.quarterName,
        datasets: [
          {
            data: lastYearQuarterTransactions.quarterMoney,
            backgroundColor: [
              "rgba(230, 25, 75,0.2)",
              "rgba(210, 245,60, 0.2)",
              "rgba(0, 130, 200, 0.2)",
              "rgba(240, 30, 180, 0.2)",
            ],
            borderColor: [
              "rgba(230, 25, 75, 0.8)",
              "rgba(210, 245,60,0.8)",
              "rgba(0, 130, 200,0.8)",
              "rgba(240, 30, 180, 0.8)",
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              "rgba(230, 25, 75, 0.5)",
              "rgba(210, 245,60, 0.5)",
              "rgba(0, 130, 200, 0.5)",
              "rgba(0, 0, 0, 0.5)",
            ],
            hoverBorderColor: [
              "rgba(230, 25, 75, 1)",

              "rgba(210, 245,60,1)",

              "rgba(0, 130, 200,1)",

              "rgba(0, 0, 0, 1)",
            ],
            hoverBorderWidth: 3,
            weight: 1,
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: "Quarterly balance",
        },
        legend: {
          position: "right",
        },
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    },
    {
      type: "pie",

      data: {
        labels: yearsTransaction.yearsName,
        datasets: [
          {
            data: yearsTransaction.years,
            backgroundColor: [
              "rgba(230, 25, 75, 0.2)",
              "rgba(245, 130, 48, 0.2)",
              "rgba(255, 225, 25, 0.2)",
              "rgba(210, 245,60, 0.2)",
              "rgba(60, 180, 75, 0.2)",
              "rgba(70, 240, 75, 0.2)",
              "rgba(0, 130, 200, 0.2)",
              "rgba(0, 0, 128, 0.2)",
              "rgba(145, 30, 180, 0.2)",
              "rgba(240, 30, 180, 0.2)",
              "rgba(128, 128, 128, 0.2)",
              "rgba(0, 0, 0, 0.2)",
            ],
            borderColor: [
              "rgba(230, 25, 75, 0.8)",
              "rgba(245, 130, 48, 0.8)",
              "rgba(255, 225, 25, 0.8)",
              "rgba(210, 245,60,0.8)",
              "rgba(60, 180, 75, 0.8)",
              "rgba(70, 240, 75,0.8)",
              "rgba(0, 130, 200,0.8)",
              "rgba(0, 0, 128, 0.8)",
              "rgba(145, 30, 180, 0.8)",
              "rgba(240, 30, 180, 0.8)",
              "rgba(128, 128, 128, 0.8)",
              "rgba(0, 0, 0, 0.8)",
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              "rgba(230, 25, 75, 0.5)",
              "rgba(245, 130, 48, 0.5)",
              "rgba(255, 225, 25, 0.5)",
              "rgba(210, 245,60, 0.5)",
              "rgba(60, 180, 75, 0.5)",
              "rgba(70, 240, 75, 0.5)",
              "rgba(0, 130, 200, 0.5)",
              "rgba(0, 0, 128, 0.5)",
              "rgba(145, 30, 180, 0.5)",
              "rgba(240, 30, 180, 0.5)",
              "rgba(128, 128, 128, 0.5)",
              "rgba(0, 0, 0, 0.5)",
            ],
            hoverBorderColor: [
              "rgba(230, 25, 75, 1)",
              "rgba(245, 130, 48, 1)",
              "rgba(255, 225, 25, 1)",
              "rgba(210, 245,60,1)",
              "rgba(60, 180, 75, 1)",
              "rgba(70, 240, 75,1)",
              "rgba(0, 130, 200,1)",
              "rgba(0, 0, 128, 1)",
              "rgba(145, 30, 180, 1)",
              "rgba(240, 30, 180, 1)",
              "rgba(128, 128, 128, 1)",
              "rgba(0, 0, 0, 1)",
            ],
            hoverBorderWidth: 3,
            weight: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: "right",
        },
      },
    },
  ];

  return (
    <Wrapper>
      <Chart specification={specification[0]}>Balance of current month</Chart>
      <Chart specification={specification[1]} maxHeight={300} maxWidth={500}>
        Monthly balance
      </Chart>
      <Chart specification={specification[2]} maxHeight={300} maxWidth={500}>
        Quarterly balance
      </Chart>
      <Chart specification={specification[3]} maxHeight={300} maxWidth={500}>
        Yearly balance
      </Chart>
    </Wrapper>
  );
};
export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Reports);
