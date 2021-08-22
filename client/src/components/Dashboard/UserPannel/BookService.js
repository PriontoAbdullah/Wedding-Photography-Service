import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { UserContext } from "../../../App";
import "../../../index.css";

const BookService = () => {
  const history = useHistory();
  const {
    selectedService: { title, price },
    loggedInUser: { name, email, photo },
  } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());
  const [services, setServices] = useState([]);
  const { register, handleSubmit } = useForm();

  const options = services.map((service) => ({
    value: service.title,
    label: service.title,
    price: service.price,
  }));

  const defaultOption = title
    ? { value: title, label: title, price: price }
    : options[0] || {
        value: "Standard",
        label: "Standard",
        price: 7000,
      };

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const serviceInfo = services.find(
    (service) => service.title === selectedOption.value
  );

  useEffect(() => {
    axios
      .get("https://wedding-photography-71.herokuapp.com/services")
      .then((res) => setServices(res.data))
      .catch((error) => toast.error(error.message));
  }, []);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      boxShadow: "none",
      border: "1px solid #E0E0E0",
      borderRadius: "10px",
      color: "#616161",
      "&:hover": { border: "1px solid #EF5350" },
      height: "calc(2em + 0.75rem + 2px)",
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? "#E53935"
          : isFocused
          ? "#fd770928"
          : null,
        color: isDisabled
          ? null
          : isSelected
          ? "white"
          : isFocused
          ? "#616161"
          : "#616161",
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? "#fd7709" : "#fd770948"),
        },
      };
    },
  };

  const onSubmit = async (data) => {
    const loading = toast.loading("Please wait...!");

    delete serviceInfo._id;
    data.service = serviceInfo.title;
    data.price = serviceInfo.price;
    data.image = serviceInfo.image;
    data.status = "Pending";
    data.progress = "33%";

    const orderDetails = {
      ...data,
      orderDate: startDate,
      email,
      photo,
    };

    axios
      .post(
        "https://wedding-photography-71.herokuapp.com/addOrder",
        orderDetails
      )
      .then((res) => {
        toast.dismiss(loading);
        toast.success("Your Booking has been Successful!");
        history.replace({ pathname: "/dashboard/myOrder" });
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error);
      });
  };

  return (
    <section className="h-full pb-8 bg-opacity-50">
      <form
        className="container max-w-2xl mx-auto shadow-3xl md:w-3/4"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                <Select
                  onChange={(option) => setSelectedOption(option)}
                  defaultValue={defaultOption}
                  options={options}
                  styles={colourStyles}
                />
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
                    <span className="text-gray-800 sm:text-sm">৳</span>
                  </div>
                  <div className="border-l border-b border-t border-gray-300 pl-7 pr-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-800 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent">
                    {selectedOption.price || price}{" "}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <span className="focus:ring-red-500 py-2 px-4 border-t border-r border-gray-300 border-b focus:border-red-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-700 sm:text-sm rounded-r-md">
                      BDT
                    </span>
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
                    {...register("name", { required: true })}
                    className="booking-input"
                    placeholder="Name"
                    defaultValue={name}
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    className="booking-input"
                    placeholder="Email"
                    defaultValue={email}
                    disabled
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    className="booking-input"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    className="booking-input"
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
