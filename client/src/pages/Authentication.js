import React, { Fragment, useEffect } from "react";
import Login from "../components/Authentication/Login";

const Authentication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

export default Authentication;
