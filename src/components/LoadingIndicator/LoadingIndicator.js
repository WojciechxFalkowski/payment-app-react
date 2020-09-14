import React from "react";
import styled, { keyframes } from "styled-components";

const Root = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const ring = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const DivRing = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;
function LoadingIndicator() {
  return (
    <Root>
      <DivRing />
    </Root>
  );
}

export default LoadingIndicator;
