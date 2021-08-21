import React from "react";
import loader from "../../../images/loader.gif";

const PreLoader = () => {
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <img src={loader} alt="loader" className="mx-auto" />
    </div>
  );
};

export default PreLoader;
