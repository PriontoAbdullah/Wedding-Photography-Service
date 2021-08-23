import React from "react";

const ViewMessage = ({ setMessageModal, viewMessage }) => {
  const { description, img } = viewMessage;
  return (
    <section>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
        <div className="container items-center px-5 py-12 mt-16 lg:px-20 ml-0 lg:ml-20">
          <div
            className="w-full mx-auto border rounded-lg shadow-xl text-gray-800 lg:w-5/12 bg-white"
            aria-hidden="false"
            aria-describedby="modalDescription"
            role="dialog"
          >
            <div className="bg-white rounded-lg p-8 font-body">
              <div className="w-24 mx-auto relative -mt-20 mb-4">
                <img className="-pt-1" src={img} alt="user" />
              </div>
              <span className="w-full block leading-normal text-gray-800 text-base mb-6">
                {description}
              </span>
              <div className="flex items-center justify-center">
                <div className="w-1/4">
                  <button
                    type="button"
                    className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    onClick={() => setMessageModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Modal Opacity */}
      <div className="opacity-25 fixed inset-0 z-40 bg-gray-900" />
    </section>
  );
};

export default ViewMessage;
