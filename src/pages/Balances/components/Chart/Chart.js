import React, { useEffect, useRef } from "react";

import { Wrapper, Canvas } from "./Chart.css";
import * as ChartJS from "chart.js";

const Chart = ({ money, dates, text }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    new ChartJS(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Money",
            data: money,
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
          text: text,
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
    });
  });

  return (
    <Wrapper>
      <Canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Chart;
