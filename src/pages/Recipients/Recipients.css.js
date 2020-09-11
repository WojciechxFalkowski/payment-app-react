import styled from "styled-components";
export const Wrapper = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    background-color: #fff;
  }
`;
export const H1 = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  padding: 2vh 0;
  @media (min-width: 1024px) {
    position: relative;
  }
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
      color: #036672;
    }
  }
`;
