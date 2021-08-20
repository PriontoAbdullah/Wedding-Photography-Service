import React from "react";
import spinner from "../../../images/loadingSpinner.gif";

const LoadingSpinner = () => {
  return (
    <section className="min-h-screen" style={{ backgroundColor: "#D64256" }}>
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <img src={spinner} alt="spinner" className="pt-20 sm:pt-0 sm:h-screen mx-auto" />
      </div>
    </section>
  );
};

export default LoadingSpinner;
