import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import './Banner.css'

// import required modules
import { EffectCoverflow, Pagination, Autoplay,Scrollbar } from "swiper";


const Banner = () => {


  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={true}
        
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        modules={[EffectCoverflow, Pagination, Autoplay,Scrollbar]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src="https://cdn.rokto.co/wp-content/uploads/2021/02/blood-donation-rkto-1-scaled-e1613380226989.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.rokto.co/wp-content/uploads/2021/02/blood-donation-rkto-1-scaled-e1613380226989.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.rokto.co/wp-content/uploads/2021/02/blood-donation-rkto-1-scaled-e1613380226989.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.rokto.co/wp-content/uploads/2021/02/blood-donation-rkto-1-scaled-e1613380226989.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.rokto.co/wp-content/uploads/2021/02/blood-donation-rkto-1-scaled-e1613380226989.jpg" />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Banner;