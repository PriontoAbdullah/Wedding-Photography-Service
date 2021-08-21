import React, { useEffect, useState } from "react";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "../../../App.css";
import bannerData from "../../../data/bannerData.js";
import Hero from "./Hero";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  const [data, SetData] = useState([]);

  // Get banner data
  useEffect(() => {
    SetData(bannerData);
  }, [data]);

  return (
    <section id="home" className="mb-16 lg:mb-24">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        key={data.length}
      >
        {data &&
          data.map((data) => (
            <SwiperSlide key={data._id}>
              <Hero data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
