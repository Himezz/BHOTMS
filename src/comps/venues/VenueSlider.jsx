import { useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { imageList, videoList } from "../../constants/images";

export const VenueSlider = ({active}) => {
  return (
    <> 
      <div className="w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "5px"
          }}
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 0 },
          
            1024: { slidesPerView: 2, spaceBetween: 10 },
          }}
          pagination={{ clickable: true }}
          rewind
          autoplay={true}
          modules={[Pagination, Autoplay]}
          className="max-w-[90%] lg:h-[500px] mx-auto"
        > 
     
        
          {  active === 'PHOTOS' ?
          imageList.map((photo) => (
            <SwiperSlide key={photo} className="flex justify-center items-center">
              <img
                src={photo}
                alt="Bombay Ballroom"
                className="transition-transform duration-500 ease-in-out w-full object-cover h-[250px] sm:h-[400px] md:h-[500px] lg:h-[400px]"
              />
              
            </SwiperSlide>
          )) : active ==='VIDEOS' ? videoList.map((video) => (
           <SwiperSlide key={video} className="flex justify-center items-center">
          <video  controls
          src={video}
           alt='Bombay Ballroom' 
           className="  w-[full]  h-[250px] sm:h-[400px] md:h-[500px] lg:h-[400px]">

          </video>
           </SwiperSlide>

            

          )) : null
        }
        </Swiper>
      </div>
  
    </>
  );
};