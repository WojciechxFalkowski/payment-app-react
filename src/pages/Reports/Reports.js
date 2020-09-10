import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Canvas } from "./Reports.css";
import { Chart } from "components";
import * as ChartJS from "chart.js";
const Reports = (transactions) => {
  const specification = {
    type: "bar",

    data: {
      labels: [], //daysData.daysName
      datasets: [
        {
          data: [], //this.daysData.daysMoney
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
        text: [], //this.months[new Date().getMonth()]
      },
      legend: {
        display: false,
        labels: {},
        position: "right",
      },
    },
  };
  useEffect(() => {});
  console.log(transactions);
  return <Chart specification={specification} />;
};
export default connect((state) => {
  return { transactions: state.transactions.transactions };
})(Reports);
