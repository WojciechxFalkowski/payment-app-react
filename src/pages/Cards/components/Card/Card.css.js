import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  justify-content: space-around;
  width: ${({ theme }) => `${theme.cards.width}px`};
  height: ${({ theme }) => `${(theme.cards.width * 2) / 3}px`};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ theme }) =>
    `${theme.cards.width}px ${(theme.cards.width * 2) / 3}px`};
  color: white;
  margin: 2vh 1vw;
  border-radius: 5px;
  @media (min-width: 1024px) {
    width: ${({ theme }) => `${(theme.cards.width * 5) / 4}px`};
    height: ${({ theme }) => `${(((theme.cards.width * 5) / 4) * 2) / 3}px`};
    background-size: ${({ theme }) =>
      `${(theme.cards.width * 5) / 4}px ${
        (((theme.cards.width * 5) / 4) * 2) / 3
      }px`};
  }
`;

export const P = styled.p`
  align-self: flex-end;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 5px 20px;
  background-color: rgba(0, 0, 0, 0.01);
`;
export const Span = styled.span`
  align-self: flex-end;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 5px 20px;
  background-color: rgba(0, 0, 0, 0.01);
`;

export const Name = styled.p`
  align-self: center;
  letter-spacing: 0.3rem;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.01);
`;

export const ExpiryDate = styled.p`
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-80%);
    content: "MONTH/YEAR";
    font-size: 0.5rem;
  }
  position: relative;
  align-self: center;
  margin-block-end: 0em;
  background-color: rgba(0, 0, 0, 0.01);
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-60%);
    content: "VALID THRU";
    font-size: 0.5rem;
  }
`;
export const HolderDetails = styled.p`
  align-self: flex-start;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 5px 20px;
  background-color: rgba(0, 0, 0, 0.01);
`;
