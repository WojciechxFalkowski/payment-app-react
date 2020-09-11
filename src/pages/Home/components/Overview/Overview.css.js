import styled from "styled-components";
export const Title = styled.h4`
  margin-block-start: 0.7em;
  margin-block-end: 0.7em;
  text-align: center;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 10px;
  height: 10px;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.isActiveOverview ? "" : "rotate(180deg)")};
`;
export const Wrapper = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  max-height: ${(props) => (props.isActiveOverview ? "" : "0px")};
  transition: max-height 0.3s ease-out;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
