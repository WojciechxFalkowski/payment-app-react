import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  transform: scale(0.7);
  @media (min-width: 768px) {
    display: none;
    height: auto;
  }
`;

export const AppMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #036672;
  transform: ${(props) =>
    props.isActiveHamburger
      ? "transform: translateX(0%);"
      : "translateX(-100%)"};
  transition: 0.5s;
  z-index: 1;
  @media (min-width: 500px) {
    width: 35vw;
  }
  @media (min-width: 768px) {
    position: unset;
    top: unset;
    left: unset;
    max-width: 180px;
    height: unset;
    transform: unset;
    min-height: 100vh;
  }
  @media (min-width: 1024px) {
    max-width: 200px;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    justify-content: unset;
  }
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1700px;
  }
`;
