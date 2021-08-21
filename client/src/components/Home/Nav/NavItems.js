import React, { Fragment } from "react";
import { Link } from "react-scroll";

const NavItems = ({ isSticky }) => {
  return (
    <Fragment>
      <li>
        <Link
          to="services"
          spy={true}
          smooth={true}
          delay={100}
          offset={0}
          duration={500}
          activeClass="text-red-accent-700"
          className={`font-display font-bold text-lg tracking-wide transition-colors duration-200 hover:text-red-accent-700 cursor-pointer ${
            !isSticky ? "text-red-500 " : "text-gray-700"
          }`}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="features"
          spy={true}
          smooth={true}
          delay={100}
          offset={0}
          duration={500}
          activeClass="text-red-accent-700"
          className={`font-display font-bold text-lg tracking-wide transition-colors duration-200 hover:text-red-accent-700 cursor-pointer ${
            !isSticky ? "text-red-500 " : "text-gray-700"
          }`}
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          delay={100}
          offset={0}
          duration={500}
          activeClass="text-red-accent-700"
          className={`font-display font-bold text-lg tracking-wide transition-colors duration-200 hover:text-red-accent-700 cursor-pointer ${
            !isSticky ? "text-red-500 " : "text-gray-700"
          }`}
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          delay={100}
          offset={0}
          duration={500}
          activeClass="text-red-accent-700"
          className={`font-display font-bold text-lg tracking-wide transition-colors duration-200 hover:text-red-accent-700 cursor-pointer ${
            !isSticky ? "text-red-500 " : "text-gray-700"
          }`}
        >
          About
        </Link>
      </li>
    </Fragment>
  );
};

export default NavItems;
