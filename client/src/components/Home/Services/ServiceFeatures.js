import React from "react";
import Fade from "react-reveal/Fade";

const FeaturesList = [
  {
    _id: "f01",
    name: "Candid Wedding Photography",
  },
  {
    _id: "f02",
    name: "Pre Wedding Photography",
  },
  {
    _id: "f03",
    name: "Maternity Shoots",
  },
  {
    _id: "f04",
    name: "Wedding Photography",
  },
  {
    _id: "f05",
    name: "Wedding Cinematography",
  },
  {
    _id: "f06",
    name: "Special Duet & Portrait",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Fade bottom>
        <div className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-8">
              <h1 className="sm:text-3xl text-2xl font-display font-semibold text-center title-font text-red-accent-700 mb-4">
                Included service with this package
              </h1>
              <p className="font-body text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                We always on the lookout for moments of emotion. We feel like
                they tell the best story of your day. For some, that might mean
                enjoying a laugh together, for others it might mean wiping a
                tear from your loved one’s cheek.
              </p>
            </div>

            {/* Service features list */}
            <div className="flex flex-wrap lg:w-10/12 sm:mx-auto sm:mb-2 -mx-2">
              {FeaturesList?.map((list) => (
                <div key={list._id} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-red-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-red-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-body title-font font-semibold text-base text-gray-800">
                      {list.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ServiceFeatures;
