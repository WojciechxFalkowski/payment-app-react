import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2vh 1vw;
  margin: 0 0 5vh 0;
`;
export const Canvas = styled.canvas`
  margin: 0 auto;
  max-height: ${(props) =>
    props.maxHeight ? `${props.maxHeight}px` : "500px"};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "900px")};
  padding: 2vh 0;
`;
export const H1 = styled.h1`
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`;
