import React, { Fragment } from "react";
import DashboardFooter from "./DashboardFooter";
import Statistics from "./Statistics";
import WelcomeBanner from "./WelcomeBanner";

const Profile = () => {
  return (
    <Fragment>
      <WelcomeBanner />
      <Statistics />
      <DashboardFooter />
    </Fragment>
  );
};

export default Profile;
