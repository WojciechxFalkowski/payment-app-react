import React, { Fragment, useState } from "react";

import GlobalStyles from "./index.css";
import { Navigation, Hamburger, Profile } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, MobileMenu, AppMenu, Wrapper, Box, Main } from "App.css";
import { FaHome, FaHistory, FaRegCreditCard } from "react-icons/fa";
import { MdLinearScale, MdAssessment } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import theme from "utils/theme";
import { ThemeProvider } from "styled-components";

import {
  Home,
  History,
  Balances,
  Cards,
  Recipients,
  AddRecipient,
  Reports,
  Settings,
  Id,
  SendMoney,
} from "pages";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const handleHamburgerIsActive = (e) => {
    e.target.classList.toggle("is-active");
    setIsActiveHamburger(!isActiveHamburger);
  };
  const menu = [
    {
      name: t("Home"),
      url: "/",
      icon: <FaHome />,
    },
    {
      name: t("History"),
      url: "/history",
      icon: <FaHistory />,
    },
    {
      name: t("Balances"),
      url: "/balances",
      icon: <MdLinearScale />,
    },
    {
      name: t("Cards"),
      url: "/cards",
      icon: <FaRegCreditCard />,
    },
    {
      name: t("Recipients"),
      url: "/recipients",
      icon: <BsFillPeopleFill />,
    },
    {
      name: t("Reports"),
      url: "/reports",
      icon: <MdAssessment />,
    },
    {
      name: t("Settings"),
      url: "/settings",
      icon: <IoMdSettings />,
    },
  ];

  return (
    <Fragment>
      <GlobalStyles />

      <Router basename={process.env.PUBLIC_URL}>
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
              <Box>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/send">
                    <SendMoney />
                  </Route>
                  <Route path="/history">
                    <History />
                  </Route>
                  <Route path="/history/:id">
                    <Id />
                  </Route>
                  <Route path="/balances">
                    <Balances />
                  </Route>
                  <Route path="/cards">
                    <Cards />
                  </Route>
                  <Route path="/recipients" exact>
                    <Recipients />
                  </Route>
                  <Route path="/recipients/add">
                    <AddRecipient />
                  </Route>
                  <Route path="/reports">
                    <Reports />
                  </Route>
                  <Route path="/settings">
                    <Settings />
                  </Route>
                  <Route>ERROR</Route>
                </Switch>
              </Box>
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
