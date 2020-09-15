import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #fff;
  @media (min-width: 1024px) {
    position: relative;
  }
`;
export const H1 = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  padding: 2vh 0;
`;
export const P = styled.p`
  text-align: center;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 10px);
  }
  a {
    color: black;
    text-decoration: none;
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.normal};
    }
  }
`;
