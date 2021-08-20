import React, { Fragment } from "react";
import Blog from "../components/Blogs/Blogs";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Banner from "../components/Hero/Banner";
import Nav from "../components/Nav/Nav";
import Services from "../components/Services/Services";
import Slogan from "../components/Slogan/Slogan";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Banner />
      <Features />
      <Services />
      <Gallery />
      <Team />
      <Testimonial />
      <Slogan />
      <Blog />
    </Fragment>
  );
};

export default Home;
