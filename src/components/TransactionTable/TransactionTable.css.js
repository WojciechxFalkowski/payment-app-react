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
  font-size: 0.7rem;
  color: rgb(134, 134, 134);
  font-weight: normal;
  cursor: pointer;

  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;
