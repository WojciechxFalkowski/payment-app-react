import styled from "styled-components";
export const Table = styled.table`
  font-size: 0.8rem;
  text-align: center;
  border-collapse: collapse;
  margin: 0 auto 5vh auto;
}
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
  font-size: 0.7rem;
  color: rgb(134, 134, 134);
  font-weight: normal;
  cursor: pointer;
  width: 6em;
  padding: 1vh 0;
  :nth-child(1) {
    width: 10em;
  }

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
  a {
    color: rgb(134, 134, 134);
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme: { colors } }) => colors.blue.dark};
    text-decoration: underline;
  }
  :nth-child(4) {
    padding-right: 1vw;
    color: rgb(134, 134, 134);
  }
`;
export const P = styled.p`
  color: ${(props) =>
    props.status === "Success"
      ? "rgba(0, 128, 0, 1)"
      : props.status === "Failed"
      ? "rgba(255, 0, 0, 1)"
      : "rgba(153, 153, 0, 1)"};
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
