import React, { Fragment, useState } from "react";
import GlobalStyles from "./index.css";
import { Navigation, Hamburger } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, MobileMenu, AppMenu, Main } from "App.css";
import { FaHome, FaHistory, FaRegCreditCard } from "react-icons/fa";
import { MdLinearScale, MdAssessment, MdSecurity } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
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
            <Navigation items={menu}></Navigation>
          </AppMenu>
          <Main>
            <Switch>
              <Route path="/" exact></Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
