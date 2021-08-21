import React from "react";
import pagkageImage from "../../../images/services/Bride-4.jpg";

const MyOrder = () => {
  return (
    <section className="container items-center px-3 py-2 lg:px-32">
      <div className="p-4 bg-white shadow-3xl max-w-2xl rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-2">
        <div className="relative pl-0 md:pl-1">
          <img
            src={pagkageImage}
            className="rounded-xl w-full max-h-56 md:w-72 md:max-h-44"
            alt="package"
          />
          <span className="font-body font-medium px-2 py-1 text-gray-50 bg-red-200 text-xs rounded absolute right-2 bottom-2 bg-opacity-50">
            Economy
          </span>
        </div>
        <div className="flex flex-col justify-between pl-0 sm:pl-4">
          <div className="flex items-start justify-between text-red-accent-700 dark:text-white my-2 md:m-0">
            <p className="font-display text-2xl leading-5">Economy Package</p>
            <button className="ml-24 text-red-400 hover:text-red-700">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between mt-3 space-x-12 font-body">
            <span className="px-2 py-1 flex items-center font-semibold text-lg rounded-md text-yellow-600 bg-yellow-100">
              Pending
            </span>
            <span className="px-2 py-1 flex items-center font-semibold text-base rounded-md text-gray-600 border border-gray-600 bg-white">
              Weeding
            </span>
          </div>

          <div className="mt-4 sm:mt-2">
            <div className="flex text-sm text-gray-500 items-center justify-between">
              <p>Task progress</p>
              <p>33%</p>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full mt-1 mb-4">
              <div className="w-1/3 h-full text-center text-xs text-white bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center rounded-lg justify-between p-2 bg-red-50 font-body">
            <div className="flex items-start w-full justify-between">
              <p className="flex-grow w-full text-2xl text-gray-700 font-medium">
                <span className="text-gray-700 font-light text-md">৳ </span>
                7,000
                <span className="text-sm font-light text-gray-700 font-medium">
                  /day
                </span>
              </p>
              <span className="px-3 py-1 flex-none text-sm rounded-full text-red-800 border border-red-300">
                Date: 23/07/2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
