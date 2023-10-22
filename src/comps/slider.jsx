import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import { AiFillStar } from "react-icons/ai";


Swiper;
const Slider = () => {


  return (<>
    <p className="text-center goldtext modal-font-header text-3xl ">Customer Reviews</p>
    <div className="flex  items-center justify-center flex-col h-[400px]  mx-4 mb-4 border shadow-[#665c5c] border-[#BC9C6F] bg-[#0000000e]">
      <Swiper
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "5px"
      }}
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 20 },
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1430:{slidesPerView:2},
        }}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        rewind
        autoplay={true}
        modules={[FreeMode, Pagination,Autoplay]}
        className="max-w-[90%] lg:max-[80%] flex justify-center items-center"
      >
        {" "}
        {ServiceData.map((item) => (
          <SwiperSlide key={item.name} className="flex items-center py-6  justify-center">
            <div className="flex flex-col gap-6 group relative shadow-lg bg-white shadow-[#665c5c] borde border-[#BC9C6F] text-black rounded-lg px-8 py-8 text-xs sm:text-lg sm:h-[350px] sm:w-[715px] lg:h-[350px] lg:w-[750px] mb-2 sm:mb-7">
           <p className="text-center  text-lg sm:hidden modal-font-header font-bold ">{item.name}</p>
           <p className="text-center hidden sm:block text-xl modal-font-header font-extrabold ">{item.name}</p>
           <p className="font-bold text-xs sm:hidden text-center">"{item.testimonial}"</p>
           <p className="font-bold sm:text-sm md:text-lg  hidden sm:block text-center">"{item.testimonial}"</p>
      
           <div className=' w-full justify-center hidden sm:flex items-center'>
           {[...Array(item.stars)].map(star => {return <AiFillStar  color='#BC9C6F'  size={40} />})}
      </div>
      <div className=' w-full justify-center flex sm:hidden items-center'>
           {[...Array(item.stars)].map(star => {return <AiFillStar  color='#BC9C6F'  size={20} />})}
      </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Slider;
