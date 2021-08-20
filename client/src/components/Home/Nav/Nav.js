import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import NavItems from "./NavItems";

const Nav = () => {
  // for mobile view
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Fade top>
      <header className="top-0 w-full fixed scrolled">
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link to="/" className="inline-flex items-center cursor-pointer">
              <img src={logo} alt="logo" className="object-contain w-10" />
              <span className="ml-2 text-base lg:text-xl font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
                Wedding{" "}
                <span className="text-red-accent-700"> Photography</span>
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <NavItems />
              <li>
                <Link to="/login" className="signup-button" title="Book Now">
                  Book Now
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-red-50 focus:bg-red-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-50">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Wedding Photography"
                          title="Wedding Photography"
                          className="inline-flex items-center"
                        >
                          <img
                            src={logo}
                            alt="logo"
                            className="object-contain w-8"
                          />
                          <span className="ml-2 text-base font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
                            Wedding
                            <span className="text-red-accent-700">
                              {" "}
                              Photography
                            </span>
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <NavItems />
                        <li>
                          <Link
                            to="/login"
                            className="signup-button w-full"
                            aria-label="Book Now"
                            title="Book Now"
                          >
                            Book Now
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </Fade>
  );
};

export default Nav;
