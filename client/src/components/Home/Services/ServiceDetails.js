import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const ServiceDetails = () => {
  const { selectedService } = useContext(UserContext);

  return (
    <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-24 pb-12 mx-auto">
          <div className="lg:w-11/12 mx-auto flex flex-wrap">
            {/* Service Data Content */}
            <div className="lg:w-1/2 w-full lg:pr-10 lg:pt-4 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest pb-2">
                Wedding
              </h2>
              <h1 className="font-display text-red-accent-700 text-3xl title-font font-semibold mb-2">
                {selectedService?.title} Package
              </h1>
              <div className="flex mb-4 font-body">
                <span className="flex-grow text-red-500 border-b-2 border-red-300 py-2 text-lg px-1">
                  Description
                </span>
                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </span>
                <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </span>
              </div>
              <p className="font-body font-medium text-base text-gray-700 leading-relaxed mb-4">
                {selectedService?.description}
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-700">Senior Photographers</span>
                <span className="ml-auto text-gray-800">
                  {selectedService?.seniorPhotographer} Person
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-700">Senior Cinematographers</span>
                <span className="ml-auto text-gray-800">
                  {selectedService?.seniorCinematographers} Person
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-700">Assistant Photographers</span>
                <span className="ml-auto text-gray-800">
                  {selectedService?.assistantPhotographer} Person
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-700">Outdoor Photoshoot</span>
                <span className="ml-auto text-gray-800">
                  {selectedService?.outdoorPhotoshoot}
                </span>
              </div>
              <div className="flex">
                <span className="flex items-end mb-6 text-2xl font-display font-bold leading-none text-gray-900 lg:text-3xl">
                  ৳ {selectedService?.price}{" "}
                  <span className="text-sm"> / day </span>
                </span>

                <Link
                  to="/dashboard/bookService"
                  className="signup-button flex ml-auto"
                >
                  Book Now
                </Link>

                <button className="rounded-full w-10 h-10 bg-red-100 p-0 border-0 inline-flex items-center justify-center text-red-accent-700 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Service Image */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow"
              src={selectedService?.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
