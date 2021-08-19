import React, { Fragment } from "react";

const NavItems = () => {
  return (
    <Fragment>
      <li>
        <a
          href="/"
          aria-label="Our Services"
          title="Our Services"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-700"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-700"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Gallery"
          title="Gallery"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-700"
        >
          Gallery
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className="font-display font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-700"
        >
          About us
        </a>
      </li>
    </Fragment>
  );
};

export default NavItems;
