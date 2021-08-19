import React, { Fragment } from "react";
import Features from "../components/Features/Features";
import Banner from "../components/Hero/Banner";
import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Banner />
      <Features />
    </Fragment>
  );
};

export default Home;
