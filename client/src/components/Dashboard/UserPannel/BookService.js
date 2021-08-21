import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../index.css";

const BookService = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="h-full pb-8 bg-opacity-50">
      <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-red-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="font-display font-semibold text-xl text-red-600">
                Book Your Package
              </h1>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white font-body">
          <div className="items-center w-full p-4 space-y-4 text-gary-800 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 font-semibold">Package</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <select
                  className="block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  name="animals"
                >
                  <option value="">Select a Package</option>
                  <option value="dog">Economy</option>
                  <option value="cat">Standard</option>
                  <option value="hamster">Premium</option>
                  <option value="parrot">Luxury</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gary-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 font-semibold">
              Package Details
            </h2>
            <div className="max-w-sm mx-auto space-y-4 md:w-2/3 font-body">
              <div>
                <label
                  for="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price pre Day
                </label>
                <div className="mt-1 relative rounded-md ">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-700 sm:text-sm">৳</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="border-l border-b border-t border-gray-300 pl-7 pr-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="7,000"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="Currency"
                      name="currency"
                      className="focus:ring-red-500 py-2 px-4 border-t border-r border-gray-300 border-b focus:border-red-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-700 sm:text-sm rounded-r-md"
                    >
                      <option>BDT</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Date
                </label>
                <div className="relative ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    minDate={new Date()}
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="items-center w-full p-4 space-y-4 text-800-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 font-semibold">
              Personal info
            </h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-phone"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-address"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="w-full px-4 pb-6 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4 bg-red-accent-700 hover:bg-red-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Book
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BookService;
