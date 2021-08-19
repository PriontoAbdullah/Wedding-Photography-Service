import React, { Fragment } from "react";

const NavItems = () => {
  return (
    <Fragment>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
        >
          About us
        </a>
      </li>
    </Fragment>
  );
};

export default NavItems;
