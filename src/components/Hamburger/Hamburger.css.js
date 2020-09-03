import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  :hover {
    opacity: 0.7;
  }
`;
export const HamburgerBox = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;
export const HamburgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
  ::before,
  ::after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  ::before {
    top: -10px;
  }
  ::after {
    bottom: -10px;
  }
  ::before {
    transform: ${(props) =>
      props.isActiveHamburger
        ? "translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1)"
        : ""};
  }
  ::after {
    transform:${(props) =>
      props.isActiveHamburger
        ? "translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1)"
        : ""};
  
`;
