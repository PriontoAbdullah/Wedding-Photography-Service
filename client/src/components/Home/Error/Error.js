import React from "react";
import { Link } from "react-router-dom";
import error from "../../../images/gallery/Details-18.jpg";

const Error = () => {
  return (
    <section className="px-4 py-20 sm:py-36 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-xs font-body font-bold tracking-wide text-red-400 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-display font-extrabold leading-tight tracking-wide text-left text-red-accent-700 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="font-body mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link to="/" className="signup-button ">
            Back to homepage
          </Link>
        </div>
        <div>
          <div className="w-full h-full shadow-3xl rounded-lg">
            <img src={error} alt="Error" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
