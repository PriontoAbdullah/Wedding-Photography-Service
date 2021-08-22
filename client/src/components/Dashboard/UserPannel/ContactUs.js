import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";

const ContactUs = () => {
  const {
    loggedInUser: { photo, name, email },
  } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Sending... Please wait!");
    data.img = photo || "https://i.imgur.com/1As0akH.png";
    data.email = email;
    data.name = name;
    data.time = new Date().toLocaleString();

    axios
      .post("https://wedding-photography-71.herokuapp.com/addMessage", data)
      .then((res) => {
        toast.dismiss(loading);
        reset();
        toast.success("Message has been successfully sent!");
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err);
      });
  };

  return (
    <section className="w-full max-w-2xl px-6 py-4 mb-6 mx-auto bg-white rounded-md shadow-3xl dark:bg-gray-800">
      <h2 className="text-3xl font-display mt-2 font-semibold text-center text-red-accent-700 dark:text-white">
        Get in touch
      </h2>
      <p className="mt-3 font-body text-sm text-center text-gray-600 dark:text-gray-400">
        We absolutely love weddings. It’s why we chosen to specialize in
        shooting them. As photographer, our job is to capture your story so you
        can remember your special day.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 font-body">
        <a
          href="/"
          className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 "
        >
          <svg
            className="w-5 h-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="mt-2 text-sm text-center hover:text-red-accent-700">
            House#23,Road#1,Sector#9, Uttara. Dhaka - 1230
          </span>
        </a>

        <a
          href="/"
          className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 "
        >
          <svg
            className="w-5 h-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>

          <span className="mt-2 text-sm text-center hover:text-red-accent-700">
            +8801973311177
          </span>
        </a>

        <a
          href="/"
          className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 "
        >
          <svg
            className="w-5 h-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <span className="mt-2 text-sm text-center hover:text-red-accent-700">
            info@weddingphotography.com
          </span>
        </a>
      </div>

      <form className="mt-6 font-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="items-center -mx-2 md:flex">
          <div className="w-full mx-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Name
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none"
              type="text"
              defaultValue={name}
              disabled
            />
          </div>

          <div className="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
              E-mail
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none"
              type="email"
              defaultValue={email}
              disabled
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Message
          </label>

          <textarea
            className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="font-body font-semibold px-4 py-2 text-gray-50 text-base transition-colors duration-200 transform bg-red-accent-700 rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-700"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
