import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  background-color: white;
  margin: 1vh 0;
  border-radius: 5px;

  @media (min-width: 500px) {
    margin: 0px 1vw 1vh 1vw;
  }
  @media (min-width: 768px) {
    width: 180px;
  }
  @media (min-width: 1024px) {
    margin: unset;
    width: 33%;
  }
`;
export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Img = styled.img`
  width: 22px;
  height: 22px;
  padding-right: 5vw;
  @media (min-width: 500px) {
    padding-right: 3vw;
  }
  @media (min-width: 768px) {
    padding-right: 1vw;
  }
`;
export const DivInformation = styled.div``;
export const P = styled.p``;
export const PMoney = styled(P)`
  font-weight: bold;
`;
export const A = styled.a`
  color: ${({ theme: { colors } }) => colors.blue.dark};
  text-decoration: none;
  background-color: #fbfdfe;
  padding: 1vh 5vw;
  @media (min-width: 1024px) {
    padding: 1vh 2vw;
  }
`;
