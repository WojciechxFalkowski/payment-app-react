import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Li, I, P } from "./Navigation.css";
import logo from "./../../images/navigation/logo2.png";

const Navigation = ({ items }) => {
  return (
    <Fragment>
      <img src={logo} alt=""></img>
      <Menu>
        {items.map((item) => (
          <NavLink key={item.name} to={item.url}>
            <Li>
              <P>
                <I>{item.icon}</I>
                {item.name}
              </P>
            </Li>
          </NavLink>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Navigation;
