import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const loading = toast.loading("Adding...Please wait!");
    axios
      .post("https://wedding-photography-71.herokuapp.com/addAdmin", data)
      .then((res) => {
        toast.dismiss(loading);
        toast.success("success");
        history.replace({ pathname: "/dashboard/profile" });
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="font-display text-3xl font-semibold text-red-700 dark:text-gray-100">
          Add a new Admin User?
        </h1>
        <p className="font-body max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
          We provide quality and cost effective Photography and Cinematography
          services.
        </p>

        <form
          className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email", { required: true })}
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2   focus:border-red-500  focus:outline-none f"
            placeholder="Email Address"
          />

          <button
            className="px-8 py-2 text-base font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-700 rounded-md sm:mx-2 hover:bg-red-900 focus:outline-none"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
