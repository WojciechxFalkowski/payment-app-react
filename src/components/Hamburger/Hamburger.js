import React from "react";
import { Wrapper, HamburgerBox, HamburgerInner } from "./Hamburger.css";
const Hamburger = ({ onClick, isActiveHamburger }) => {
  return (
    <Wrapper onClick={onClick}>
      <HamburgerBox>
        <HamburgerInner isActiveHamburger={isActiveHamburger}></HamburgerInner>
      </HamburgerBox>
    </Wrapper>
  );
};

export default Hamburger;
