import React, { useContext, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import user from "../../images/user.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const { isAdmin } = useContext(UserContext);
  const { panel } = useParams();

  const {
    loggedInUser: { name, email, photo },
  } = useContext(UserContext);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-30 z-40 lg:hidden lg:z-auto shadow-xl transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-red-50 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-4 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden pl-1 text-red-600 hover:text-red-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link exact to="/" className="block">
            <div href="/" className="inline-flex items-center mt-6 mx-6">
              <img src={logo} alt="logo" className="object-contain w-10" />
              <span className="ml-2 text-base font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
                Wedding{" "}
                <span className="text-red-accent-700"> Photography</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Links */}

        <div className="flex flex-col items-center flex-shrink-0 pb-4">
          <img
            alt="testimonial"
            className="inline-block object-cover object-center w-20 h-20 mb-4 rounded-full"
            src={photo || user}
          />
          <h2 className="font-display text-2xl font-bold tracking-wide text-red-accent-700 title-font">
            {name}
          </h2>
          <p className="font-body text-sm font-semibold tracking-wide text-gray-700 title-font">
            {email}
          </p>
        </div>
        <nav className="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
          {isAdmin ? (
            // Adman Panel
            <ul className="font-body font-semibold text-2xl">
              <li>
                <Link
                  className={
                    panel === "profile" ? "sidebar-item-active" : "sidebar-item"
                  }
                  to="/dashboard/profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class=" icon icon-tabler icon-tabler-credit-card"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="7" y1="15" x2="7.01" y2="15"></line>
                    <line x1="11" y1="15" x2="13" y2="15"></line>
                  </svg>
                  <span class="ml-4">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "allOrders"
                      ? "sidebar-item-active"
                      : "sidebar-item"
                  }
                  to="/dashboard/allOrders"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-artboard"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                    <line x1="3" y1="8" x2="4" y2="8"></line>
                    <line x1="3" y1="16" x2="4" y2="16"></line>
                    <line x1="8" y1="3" x2="8" y2="4"></line>
                    <line x1="16" y1="3" x2="16" y2="4"></line>
                    <line x1="20" y1="8" x2="21" y2="8"></line>
                    <line x1="20" y1="16" x2="21" y2="16"></line>
                    <line x1="8" y1="20" x2="8" y2="21"></line>
                    <line x1="16" y1="20" x2="16" y2="21"></line>
                  </svg>
                  <span class="ml-4">All Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "addService"
                      ? "sidebar-item-active"
                      : "sidebar-item"
                  }
                  to="/dashboard/addService"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-inbox"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M4 13h3l3 3h4l3 -3h3"></path>
                  </svg>
                  <span class="ml-4">Add Service</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "messages"
                      ? "sidebar-item-active"
                      : "sidebar-item"
                  }
                  to="/dashboard/messages"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                  </svg>
                  <span class="ml-4">Messages</span>
                </Link>
              </li>
            </ul>
          ) : (
            // User Panel
            <ul className="font-body font-semibold text-2xl">
              <li>
                <Link
                  className={
                    panel === "profile" ? "sidebar-item-active" : "sidebar-item"
                  }
                  to="/dashboard/profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class=" icon icon-tabler icon-tabler-credit-card"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="7" y1="15" x2="7.01" y2="15"></line>
                    <line x1="11" y1="15" x2="13" y2="15"></line>
                  </svg>
                  <span class="ml-4">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "bookService"
                      ? "sidebar-item-active"
                      : "sidebar-item"
                  }
                  to="/dashboard/bookService"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-artboard"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                    <line x1="3" y1="8" x2="4" y2="8"></line>
                    <line x1="3" y1="16" x2="4" y2="16"></line>
                    <line x1="8" y1="3" x2="8" y2="4"></line>
                    <line x1="16" y1="3" x2="16" y2="4"></line>
                    <line x1="20" y1="8" x2="21" y2="8"></line>
                    <line x1="20" y1="16" x2="21" y2="16"></line>
                    <line x1="8" y1="20" x2="8" y2="21"></line>
                    <line x1="16" y1="20" x2="16" y2="21"></line>
                  </svg>
                  <span class="ml-4">Book Services</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "myOrder" ? "sidebar-item-active" : "sidebar-item"
                  }
                  to="/dashboard/myOrder"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-inbox"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M4 13h3l3 3h4l3 -3h3"></path>
                  </svg>
                  <span class="ml-4">My Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    panel === "contact" ? "sidebar-item-active" : "sidebar-item"
                  }
                  to="/dashboard/contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-users"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                  </svg>
                  <span class="ml-4">Contact Us</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
