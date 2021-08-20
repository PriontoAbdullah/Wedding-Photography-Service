import React from "react";
import "../../App.css";

const Slogan = () => {
  return (
    <section className="flex items-center justify-center h-full mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="my-56 mx-6 sm:mx-12 p-4 sm:p-8 text-2xl bg-gray-900 bg-opacity-40 rounded-xl shadow-3xl transition-colors duration-300 hover:bg-opacity-50 ">
        <h2 className="font-display font-semibold text-4xl sm:text-5xl text-gray-50 text-center leading-loose">
          Get Amazed With The Best Cinematographers In Bangladesh
        </h2>
        <p className="p-5 pt-8 font-body font-medium text-3xl sm:text-4xl text-center text-gray-100 leading-loose">
          We provide high quality and cost effective Photography and
          Cinematography services.
        </p>
      </div>
    </section>
  );
};

export default Slogan;
