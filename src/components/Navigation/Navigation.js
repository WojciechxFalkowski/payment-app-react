import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Menu, Li, I } from "./Navigation.css";
import logo from "./../../images/navigation/logo2.png";
import theme from "utils/theme";
const Navigation = ({ onClick, items }) => {
  return (
    <Fragment>
      <Wrapper>
        <img src={logo} alt="logo easywire"></img>
        <Menu>
          {items.map((item) => (
            <Li key={item.name}>
              <NavLink
                onClick={onClick}
                to={item.url}
                activeStyle={{
                  backgroundColor: theme.colors.blue.dark,
                }}
                exact={item.url === "/" ? true : false}
              >
                <I>{item.icon}</I>
                {item.name}
              </NavLink>
            </Li>
          ))}
        </Menu>
      </Wrapper>
    </Fragment>
  );
};

export default Navigation;
