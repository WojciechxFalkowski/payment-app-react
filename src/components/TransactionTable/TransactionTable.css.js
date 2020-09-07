import styled from "styled-components";
export const Table = styled.table`
  font-size: 0.8rem;
  text-align: center;
  border-collapse: collapse;
  margin: 0 auto;
  margin-bottom: 5vh;
  @media (min-width: 500px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const Tr = styled.tr`
  margin-bottom: 1vh;
  background-color: white;
  border-bottom: 1px solid #f1f5f9;
  :nth-child(1) {
    margin-bottom: 1vh;
    background-color: #fbfdfe;
  }
  :nth-last-child(1) {
    border-bottom: unset;
  }
`;
export const Th = styled.th`
  :nth-child(1) {
    width: 10em;
  }
  font-size: 0.7rem;
  color: rgb(134, 134, 134);
  font-weight: normal;
  cursor: pointer;
  width: 6em;
  padding: 2px;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;
export const Td = styled.td`
  width: 6em;
  padding: 2px;
  :nth-child(1) {
    width: 10em;
    padding-left: 1vw;
    color: rgb(134, 134, 134);
  }

  :nth-child(4) {
    padding-right: 1vw;
    color: rgb(134, 134, 134);
  }
`;
export const P = styled.p`
  background-color: ${(props) =>
    props.status === "Success"
      ? "rgba(154, 248, 125, 0.753)"
      : props.status === "Failed"
      ? "rgba(255, 107, 88, 0.753)"
      : "rgba(234, 243, 106, 0.5)"};
  box-shadow: ${(props) =>
    props.status === "Success"
      ? "0px 0px 10px 2px rgb(154, 248, 125)"
      : props.status === "Failed"
      ? "0px 0px 10px 2px rgb(255, 107, 88)"
      : "0px 0px 10px 2px rgb(234, 243, 106)"};
  color: ${({ theme: { colors } }) => colors.blue.dark};
`;
export const Span = styled.span`
  display: inline-block;
  transform: translateY(2px);
  svg {
    color: ${(props) => (props.state === 0 ? "rgb(134, 134, 134)" : "black")};
    transform-origin: center center;
    transform: ${(props) =>
      props.state % 2 === 0 ? "rotate(0)" : "rotate(180deg)"};
  }
`;
