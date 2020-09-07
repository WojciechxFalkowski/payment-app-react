import React, { Fragment, useState } from "react";
import GlobalStyles from "./index.css";
import { Navigation, Hamburger, Profile } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, MobileMenu, AppMenu, Wrapper, Main } from "App.css";
import { FaHome, FaHistory, FaRegCreditCard } from "react-icons/fa";
import { MdLinearScale, MdAssessment, MdSecurity } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import theme from "utils/theme";
import { ThemeProvider } from "styled-components";
import { Home, History } from "pages";

function App() {
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const handleHamburgerIsActive = (e) => {
    e.target.classList.toggle("is-active");
    setIsActiveHamburger(!isActiveHamburger);
  };
  const menu = [
    {
      name: "Home",
      url: "/",
      icon: <FaHome />,
    },
    {
      name: "History",
      url: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Balances",
      url: "/balances",
      icon: <MdLinearScale />,
    },
    {
      name: "Cards",
      url: "/cards",
      icon: <FaRegCreditCard />,
    },
    {
      name: "Recipients",
      url: "/recipients",
      icon: <BsFillPeopleFill />,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: <MdAssessment />,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: <IoMdSettings />,
    },
    {
      name: "Help",
      url: "/help",
      icon: <BiHelpCircle />,
    },
    {
      name: "Privacy",
      url: "/privacy",
      icon: <MdSecurity />,
    },
  ];
  return (
    <Fragment>
      <GlobalStyles />

      <Router>
        <Container>
          <MobileMenu>
            <Hamburger
              onClick={handleHamburgerIsActive}
              isActiveHamburger={isActiveHamburger}
            />
          </MobileMenu>
          <AppMenu isActiveHamburger={isActiveHamburger}>
            <Navigation
              onClick={handleHamburgerIsActive}
              items={menu}
            ></Navigation>
          </AppMenu>
          <Main>
            <Profile />
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/history" exact>
                  <History />
                </Route>
              </Switch>
            </Wrapper>
          </Main>
        </Container>
      </Router>
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default RootApp;
