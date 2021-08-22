import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    if (!data.image[0]) {
      return toast.error("Please upload an image!");
    }

    const loading = toast.loading("Uploading...Please wait!");
    const imageData = new FormData();
    imageData.set("key", "08d5da1c81cc5c52012f0b930505d031");
    imageData.append("image", data.image[0]);

    let imageURL = "";
    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
      imageURL = res.data.data.display_url;
    } catch (error) {
      toast.dismiss(loading);
      return toast.error("Failed to upload the image!");
    }

    const serviceInfo = {
      title: data.title,
      description: data.description,
      price: data.price,
      image: imageURL,
      seniorPhotographer: data.seniorPhotographer,
      seniorCinematographers: data.seniorCinematographers,
      assistantPhotographer: data.assistantPhotographer,
      outdoorPhotoshoot: data.outdoorPhotoshoot,
    };

    axios
      .post(
        "https://wedding-photography-71.herokuapp.com/addService",
        serviceInfo
      )
      .then((res) => {
        toast.dismiss(loading);
        toast.success("Service has been Successfully Uploaded");
        history.replace({ pathname: "/dashboard/manageService" });
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error);
      });
  };

  return (
    <section>
      <div className="container items-center px-5  lg:px-20">
        <form
          className="flex flex-col w-full shadow-3xl pt-6 mb-8 px-8 mx-auto mt-4 mb-8 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-3/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-display mb-2 font-semibold text-center text-red-accent-700 dark:text-white">
            Add a New Service
          </h2>

          <div className="relative pt-4">
            <label for="title" className="text-base leading-7 text-gray-700">
              Package Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Title"
              className="service-input"
            />
          </div>

          <div className="relative mt-4">
            <label for="price" className="text-base leading-7 text-gray-700">
              Package Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              placeholder="Price"
              className="service-input"
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
                className="service-text-area"
                id="description"
                {...register("description", { required: true })}
                type="text"
                placeholder="Package Details..."
                required=""
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title1"
              >
                Senior Photographers
              </label>
              <input
                className="service-input"
                id="grid-title1"
                type="number"
                {...register("seniorPhotographer", { required: true })}
                placeholder="3 Person"
              />
            </div>

            <div className="w-full px-3 mb-2 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title2"
              >
                Senior Cinematographers
              </label>
              <input
                className="service-input"
                id="grid-title2"
                type="number"
                {...register("seniorCinematographers", { required: true })}
                placeholder="2 Person"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-0 sm:mb-4 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title3"
              >
                Assistant Photographers
              </label>
              <input
                className="service-input"
                id="grid-title3"
                type="number"
                {...register("assistantPhotographer", { required: true })}
                placeholder="5 Person"
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="text-base leading-7 text-gray-700"
                for="grid-title4"
              >
                Outdoor Photoshoot
              </label>
              <input
                className="service-input"
                id="grid-title4"
                type="text"
                {...register("outdoorPhotoshoot", { required: true })}
                placeholder="Yes"
              />
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
                      htmlFor="upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-red-accent-700 hover:text-red-900 bg-red-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a Picture</span>
                      <input
                        id="upload"
                        type="file"
                        {...register("image")}
                        placeholder="Upload photo"
                        className="hidden"
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
