import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const EditOrders = ({ setEditModal, viewOrder, orders, setOrders }) => {
  const {
    _id,
    name,
    email,
    phone,
    address,
    orderDate,
    price,
    service,
    status,
  } = viewOrder;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleStatusChange = (id, status) => {
    let modifiedOrders = [];
    let progress;

    orders.forEach((order) => {
      if (order._id === id) {
        order.status = status;

        if (status === "Canceled") {
          order.progress = "0%";
        } else if (status === "Pending") {
          order.progress = "25%";
        } else if (status === "Confirmed") {
          order.progress = "50%";
        } else if (status === "In Progress") {
          order.progress = "75%";
        } else if (status === "Completed") {
          order.progress = "100%";
        }

        progress = order.progress;
      }
      modifiedOrders.push(order);
    });

    setOrders(modifiedOrders);

    const modifiedStatus = { id, status, progress };

    axios
      .patch(
        "https://wedding-photography-71.herokuapp.com/updateOrderStatus",
        modifiedStatus
      )
      .then((res) => res.data && toast.success(`Set Order Status to ${status}`))
      .catch((error) => toast.error(error.message));
  };

  return (
    <section>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
        <div className="container items-center px-5 py-12 lg:px-20 ml-0 lg:ml-20">
          <div
            className="w-full mx-auto border rounded-lg shadow-xl text-gray-800 lg:w-7/12 bg-white"
            aria-hidden="false"
            aria-describedby="modalDescription"
            role="dialog"
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg font-body font-medium">
              <div className="flex items-center justify-between pt-4">
                <div className="px-4 sm:px-6 mb-4">
                  <h3 className="text-lg sm:text-xl leading-6 text-red-accent-700 font-semibold text-gray-800">
                    Order Details
                  </h3>
                  <p className="mt-1 max-w-2xl text-base text-gray-700">
                    Customer details and Order information.
                  </p>
                </div>

                <button
                  className="justify-end p-1 mr-4 -mt-6 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 text-red-600 hover:bg-red-400 focus:outline-none"
                  type="button"
                  aria-label="Close"
                  aria-hidden="true"
                  onClick={() => setEditModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
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
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                </button>
              </div>

              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Customer Name
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {name}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Contact Number
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {phone}
                    </dd>
                  </div>
                  <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Email Address
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {email}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Present Address
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {address}
                    </dd>
                  </div>
                  <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Package Name
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {service}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Package Price
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      ৳ {price}
                    </dd>
                  </div>
                  <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Booking Id
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {_id}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Booking Date
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      {new Date(orderDate).toLocaleDateString("en-US", options)}
                    </dd>
                  </div>
                  <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-700">
                      Order Status
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      <select
                        className={`block w-52 font-semibold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          status === "Pending"
                            ? "text-yellow-600"
                            : status === "Confirmed"
                            ? "text-indigo-600"
                            : status === "Completed"
                            ? "text-green-600"
                            : status === "Cancelled"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                        name="status"
                        defaultValue={status}
                        onChange={(e) =>
                          handleStatusChange(_id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mb-4">
                    <dt className="text-base font-medium text-gray-700">
                      Action
                    </dt>
                    <dd className="mt-1 text-base text-gray-800 sm:mt-0 sm:col-span-2">
                      <button
                        onClick={() => setEditModal(false)}
                        className=" py-2 px-4 bg-red-accent-700 hover:bg-red-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-52 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                      >
                        Close
                      </button>
                    </dd>
                  </div>
                </dl>
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

export default EditOrders;
