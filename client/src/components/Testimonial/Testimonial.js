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
import "../../App.css";
import testimonialData from "../../data/testimonialData.js";
import bgTestimonial from "../../images/background/biography-bg.png";
import Review from "./Review.js";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = () => {
  const [testimonials, SetTestimonials] = useState([]);

  // Get testimonials data
  useEffect(() => {
    SetTestimonials(testimonialData);
  }, [testimonials]);

  return (
    <section
      className="min-h-auto bg-cover bg-no-repeat bg-center opacity-95"
      style={{
        backgroundImage: `url(${bgTestimonial})`,
      }}
    >
      <div className="px-4 pt-8 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Fade bottom>
          <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
            <h2 className="max-w-xl mb-4 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative text-gray-900">
                What Our Clients Say!
              </span>
            </h2>
            <div className="h-1 mx-auto duration-300 transform bg-red-600 scale-x-30 group-hover:scale-x-100" />
          </div>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            key={testimonials.length}
          >
            {testimonials &&
              testimonials.map((review) => (
                <SwiperSlide key={review._id}>
                  <Review review={review} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonial;
