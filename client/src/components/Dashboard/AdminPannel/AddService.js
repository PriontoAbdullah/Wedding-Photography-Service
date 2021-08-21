import React from "react";

const AddService = () => {
  return (
    <section>
      <div className="container items-center px-5  lg:px-20">
        <form className="flex flex-col w-full shadow-3xl pt-6 mb-8 px-8 mx-auto mt-4 mb-8 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-3/4 ">
          <h2 className="text-2xl font-display mb-2 font-semibold text-center text-red-accent-700 dark:text-white">
            Add a New Service
          </h2>

          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-gray-700">
              Package Title
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Title"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>

          <div className="relative mt-4">
            <label for="name" className="text-base leading-7 text-gray-700">
              Package Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap my-4 -mx-3">
            <div className="w-full px-3">
              <label
                className="text-base leading-7 text-gray-700"
                for="description"
              >
                Description
              </label>
              <textarea
                className="w-full h-32 px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent apearance-none autoexpand"
                id="description"
                type="text"
                name="description"
                placeholder="Package Details..."
                required=""
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title"
              >
                Senior Photographers
              </label>
              <input
                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                id="grid-title"
                type="number"
                name="title"
                placeholder="3 Person"
              />
            </div>

            <div className="w-full px-3 mb-2 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-url"
              >
                Senior Cinematographers
              </label>
              <input
                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                id="grid-url"
                type="number"
                name="url"
                placeholder="2 Person"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-0 sm:mb-4 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title"
              >
                Assistant Photographers
              </label>
              <input
                className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-red-50 focus:border-red-500 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                id="grid-title"
                type="number"
                name="title"
                placeholder="5 Person"
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-url"
              >
                Outdoor Photoshoot
              </label>
              <div className=" relative ">
                <select
                  className="block w-full mt-3 text-gray-500 py-2 px-3 border border-gray-300 bg-red-50 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  name="animals"
                >
                  <option value="">Select an Option</option>
                  <option value="dog">Yes</option>
                  <option value="cat">No</option>
                </select>
              </div>
            </div>
          </div>

          <section className="flex flex-col w-full h-full overflow-auto">
            <div>
              <label className="block text-base leading-7 text-gray-700 pb-1">
                Service Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md  bg-red-50">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-red-accent-700 hover:text-red-900 bg-red-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a Picture</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-700">
                    PNG, JPG, GIF up to 1MB
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full px-4 py-8 ml-auto text-gray-700 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4 bg-red-accent-700 hover:bg-red-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
