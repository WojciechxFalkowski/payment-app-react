import styled from "styled-components";
export const AppPerson = styled.div`
  margin-bottom: 1vh;
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const AppPersonality = styled.div`
  display: flex;
  padding-top: 5vh;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 52px;
  height: 52px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 2vw;
`;
export const Person = styled.div``;
export const P = styled.p``;
export const Pname = styled.p`
  font-weight: bold;
`;
export const Istyled = styled.i`
  font-size: 1.1rem;
  svg {
    transform: translateY(3px);
  }
`;
export const MainButtons = styled.div`
  text-align: right;
  @media (min-width: 1024px) {
    align-self: center;
  }
`;
