import React, { useEffect } from "react";
import Footer from "../components/Home/Footer/Footer";
import Nav from "../components/Home/Nav/Nav";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import ServiceFeatures from "../components/Home/Services/ServiceFeatures";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <ServiceDetails />
      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default ServicePage;
