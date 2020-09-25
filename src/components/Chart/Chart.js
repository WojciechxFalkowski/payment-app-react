import React, { useEffect, useRef } from "react";

import { Wrapper, Canvas, H1 } from "./Chart.css";
import * as ChartJS from "chart.js";

const Chart = ({ specification, children, maxWidth }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    new ChartJS(ctx, specification);
  });

  return (
    <Wrapper>
      {children ? <H1>{children}</H1> : null}
      <Canvas ref={canvasRef} maxWidth={maxWidth} />
    </Wrapper>
  );
};

export default Chart;
