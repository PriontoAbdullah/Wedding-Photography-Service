import React, { Fragment } from "react";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Banner from "../components/Hero/Banner";
import Nav from "../components/Nav/Nav";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Banner />
      <Features />
      <Services />
      <Gallery />
      <Team />
    </Fragment>
  );
};

export default Home;
