import React from "react";
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
    <p className="text-center goldtext modal-font-header text-3xl">Testimonials</p>
    <div className="flex  items-center justify-center flex-col h-[400px] shadow-inner mx-4 bg-white">
      <Swiper
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "5px",
        "--swiper-pagination-bullet-horizontal-gap": "5px"
      }}
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 20 },
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
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
            <div className="flex flex-col gap-6 group relative shadow-lg text-black rounded-xl px-8 py-8 text-sm sm:text-lg sm:h-[350px] sm:w-[715px] lg:h-[350px] lg:w-[750px]">
           <p className="text-center text-3xl modal-font-header font-bold ">{item.name}</p>
           <p className="font-bold text-center">"{item.testimonial}"</p>
           <div className='flex w-full justify-center items-center'>
           {[...Array(item.stars)].map(star => {return <AiFillStar  color='#BC9C6F'  size={40} />})}
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
