import React, { Fragment, useEffect } from "react";
import Blog from "../components/Home/Blogs/Blogs";
import Features from "../components/Home/Features/Features";
import Footer from "../components/Home/Footer/Footer";
import Gallery from "../components/Home/Gallery/Gallery";
import Banner from "../components/Home/Hero/Banner";
import Nav from "../components/Home/Nav/Nav";
import Services from "../components/Home/Services/Services";
import Slogan from "../components/Home/Slogan/Slogan";
import Team from "../components/Home/Team/Team";
import Testimonial from "../components/Home/Testimonial/Testimonial";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Footer />
    </Fragment>
  );
};

export default Home;
