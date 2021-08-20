import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "../../../App.css";
import serviceData from "../../../data/serviceData.js";
import useWindowWidth from "../Hooks/useWindowWidth";
import SingleService from "./SingleService.js";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Services = () => {
  const [service, SetService] = useState([]);

  // get window width from custom hook
  const onSmallScreen = useWindowWidth(1024);

  // Get service data
  useEffect(() => {
    SetService(serviceData);
  }, [service]);

  return (
    <section
      className="px-4 pt-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      id="services"
    >
      <Fade>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-red-100 lg:w-32 lg:-ml-28 lg:-mt-6 sm:block"
              >
                <defs>
                  <pattern
                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-red-accent-700">Our Services</span>
            </span>{" "}
            on capturing your emotions and happiness moments
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We are one of the top wedding photographers in Dhaka and we also
            provide pre wedding photography service in Bangladesh.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={onSmallScreen ? "1" : "auto"}
            spaceBetween={30}
            centeredslide={"false"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={true}
            key={service && service.length}
            className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-xl sm:mx-auto pb-12"
          >
            {service &&
              service.map((service) => (
                <SwiperSlide key={service._id}>
                  <SingleService service={service} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Fade>
    </section>
  );
};

export default Services;
