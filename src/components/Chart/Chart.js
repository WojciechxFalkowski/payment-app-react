import React, { useEffect, useRef } from "react";

import { Wrapper, Canvas } from "./Chart.css";
import * as ChartJS from "chart.js";

const Chart = ({ specification }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    new ChartJS(ctx, specification);
  });

  return (
    <Wrapper>
      <Canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Chart;
