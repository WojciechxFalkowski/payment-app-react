import React, { Fragment } from "react";
import { Overview, RecentActivity } from "./components";
const Home = () => {
  return (
    <Fragment>
      <Overview />
      <RecentActivity />
    </Fragment>
  );
};

export default Home;
