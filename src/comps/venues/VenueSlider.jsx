import { useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


export const VenueSlider = ({active,imageList,videoList}) => {
  
  const autoplayConfig = active === 'PHOTOS' 
  ? { delay: 1700, disableOnInteraction: false }
  : false;

console.log(autoplayConfig);
  return (
    <> 

      <div className="w-[90%] max-w-[1200px]  ">
        <Swiper
        key={active}
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "5px"
          }}
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 0 },
          
            1024: { slidesPerView: 1, spaceBetween: 0 },
          }}
          pagination={{ clickable: true }}
          rewind 
          
           autoplay={autoplayConfig }
          modules={[Pagination, Autoplay]}
          className="w-full md:video "
        > 
     
        
          {  active === 'PHOTOS' ?
          imageList.map((photo) => (
            <SwiperSlide key={photo} className="flex justify-center   items-center">
              <img
                src={photo}
                alt="Bombay Ballroom"
                className="transition-transform duration-500 ease-in-out w-full  p-2 max-w-[1300px]  max-h-[600px]  "
              />
              
            </SwiperSlide>
          )) : active ==='VIDEOS' ? videoList.map((video) => (
           <SwiperSlide key={video} className="flex justify-center  items-center">
          <video  controls
          src={video}
           alt='Bombay Ballroom' 
           className="  w-[100%] max-w-[1000px] max-h-[700px]">

          </video>
           </SwiperSlide>

            

          )) : null
        }
        </Swiper>
 
  </div>
    </>
  );
};