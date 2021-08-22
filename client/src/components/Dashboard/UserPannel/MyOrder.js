import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import cover from "../../../images/gallery/Details-18.jpg";

const SkeletonComponent = () => (
  <SkeletonTheme color="#FFEBEE" highlightColor="#FAFAFA">
    <section className="mb-8">
      <Skeleton height={209} width={550} />
    </section>
  </SkeletonTheme>
);

const MyOrder = () => {
  const {
    loggedInUser: { email, name, photo },
  } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    axios
      .get(`https://wedding-photography-71.herokuapp.com/orders?email=${email}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [email]);

  return (
    <section>
      {loading ? (
        <div className="items-center px-1 max-w-sm lg:max-w-full border-rounded lg:px-52">
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      ) : (
        <div>
          {orders.length ? (
            orders.map((order) => {
              return (
                <div
                  className="container items-center px-3 py-2 lg:px-40 pb-6"
                  key={order._id}
                >
                  <div className="p-4 bg-white shadow-3xl max-w-2xl rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-2">
                    <div className="relative pl-0 md:pl-1">
                      <img
                        src={order.image}
                        className="rounded-xl w-full max-h-56 md:w-72 md:max-h-44"
                        alt="package"
                      />
                      <span className="font-body font-medium px-2 py-1 text-gray-50 bg-red-200 text-xs rounded absolute right-2 bottom-2 bg-opacity-50">
                        {order.service}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between pl-0 sm:pl-4">
                      <div className="flex items-start justify-between text-red-accent-700 dark:text-white my-2 md:m-0">
                        <p className="font-display text-2xl leading-5">
                          {order.service} Package
                        </p>
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
                        <span
                          className={`px-2 py-1 flex items-center font-semibold text-lg rounded-md ${
                            order.status === "Pending"
                              ? "text-yellow-600 bg-yellow-200"
                              : order.status === "Confirmed"
                              ? "text-indigo-600 bg-indigo-200"
                              : order.status === "Completed"
                              ? "text-green-600 bg-green-200"
                              : order.status === "Cancelled"
                              ? "text-red-600 bg-red-200"
                              : "text-blue-600 bg-blue-200"
                          }`}
                        >
                          {order.status}
                        </span>
                        <span className="px-2 py-1 flex items-center font-semibold text-base rounded-md text-gray-500 border border-gray-500 bg-white">
                          Weeding
                        </span>
                      </div>

                      <div className="mt-4 sm:mt-2">
                        <div className="flex text-sm text-gray-600 items-center justify-between">
                          <p>Task progress</p>
                          <p>{order.progress}</p>
                        </div>
                        <div className="w-full h-2 bg-gray-300 rounded-full mt-1 mb-4">
                          <div
                            className={`h-full text-center text-xs text-white rounded-full ${
                              order.status === "Pending"
                                ? "bg-yellow-400 w-1/4"
                                : order.status === "Confirmed"
                                ? "bg-indigo-400 w-2/4"
                                : order.status === "Completed"
                                ? "bg-green-400 w-full"
                                : order.status === "Cancelled"
                                ? "bg-red-400 w-full"
                                : "bg-blue-400 w-3/4"
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center rounded-lg justify-between p-2 bg-red-50 font-body">
                        <div className="flex items-start w-full justify-between">
                          <p className="flex-grow w-full text-2xl text-gray-700 font-medium">
                            <span className="text-gray-700 font-light text-md">
                              ৳{" "}
                            </span>
                            {order.price}
                            <span className="text-sm font-light text-gray-700 font-medium">
                              /day
                            </span>
                          </p>
                          <span className="px-3 py-1 flex-none text-sm rounded-full text-red-800 border border-red-300">
                            {new Date(order.orderDate).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="px-6 py-6 mx-auto text-center items-center px-1 max-w-sm border-rounded">
              <div className="shadow-lg rounded-2xl w-64 bg-white">
                <img
                  alt="cover"
                  src={cover}
                  className="rounded-t-lg h-40 w-full mb-4"
                />
                <div className="flex flex-col items-center justify-center p-4 -mt-24">
                  <a href="/" class="block relative">
                    <img
                      alt="profile"
                      src={photo}
                      className="mx-auto object-cover rounded-full h-24 w-24"
                    />
                  </a>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                    {name}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p className="text-gray-700 text-base flex items-center justify-center">
                    You have no orders! Please book a service first!
                  </p>

                  <Link to="/dashboard/bookService">
                    <div className="flex items-center justify-between gap-4 w-full mt-4">
                      <button
                        type="button"
                        class="py-2 px-4 bg-red-accent-700 hover:bg-red-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                      >
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MyOrder;
