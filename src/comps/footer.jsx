import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return ( <>
    <div className="h-[800px] mt-2 md:hidden  bg-black">
      <div className="w-full h-[100px] pt-8 text-center">
        <div className="w-[400px] ">
        <p className=" tracking-widest goldtext modal-font-header font-bold text-2xl"  > BANQUET HALLS
        
          <p className=" text-sm text-semibold">OF THE-MID SOUTH</p>
        </p>
        </div>
      </div>


      <div className="w-full pl-4">
        <p className="text-white  font-semibold text-sm mb-4 mt-7">Subscribe to get the latest newsletter</p>
         <input className="p-3 w-[70%] rounded-sm " type="email" name="" id="" />
         <button className=" p-3 colorgold rounded-sm text-white " > SUBSCRIBE</button>
      </div>

      <div className="flex w-full mt-4 justify-between">
        <ul className="flex w-[30%] flex-col gap-3 pl-4 mt-10">
            <Link className="text-white text-xs ">Rondevu</Link>
            <Link className="text-white text-xs ">All Occasion</Link>
            <Link className="text-white text-xs ">Aashiana Hall</Link>
            <Link className="text-white text-xs ">Bombay Ballroom</Link>
            <Link className="text-white text-xs ">UptownSocials901</Link>
            <Link className="text-white text-xs ">Bartlett Banquet Hall</Link>
        </ul>
        <ul>
            <div className="flex row gap-10">
        <ul className="flex flex-col w-[100px] gap-3 pl-4 mt-10">
            <Link className="text-white text-xs ">Home</Link>
            <Link className="text-white text-xs ">Pricing</Link>
            <Link className="text-white text-xs ">Catering</Link>
            <Link className="text-white text-xs ">About Us</Link>
            <Link className="text-white text-xs ">Inquire</Link>
                 
        </ul>
        <ul className="flex flex-col gap-3 pl-4 pr-9 mt-10">
            <Link className="text-white text-xs ">Blog</Link>
            <Link className="text-white text-xs ">Careers</Link>
            <Link className="text-white text-xs ">FAQ</Link>
        </ul> 
        </div>
        </ul>
        <ul>
 
        </ul>
      </div>
      <div className="flex w-full justify-between">
        <ul className="flex w-[30%] flex-col gap-3 pl-4 mt-10">
            <Link className="text-white text-xs ">Banqet Halls</Link>
            <Link className="text-white text-xs ">Event Planning</Link>
            <Link className="text-white text-xs ">Wedding Planning</Link>
            <Link className="text-white text-xs ">Wedding Venues</Link>
            <Link className="text-white text-xs ">Photoshoot Locations</Link>
            <Link className="text-white text-xs ">Floorplans</Link>
        </ul>
        <ul>
          
        <ul className="flex flex-col w-[220px] gap-3 pl-4 mt-10">
            <Link className="text-white text-xs ">Filming</Link>
            <Link className="text-white text-xs ">Preferred Vendors</Link>
            <Link className="text-white text-xs ">Press/Awards</Link>
            <Link className="text-white text-xs ">Testimonials</Link>
                 
        </ul>

   
        </ul>
        <ul>

        </ul>
      </div>

      <div className="bg-black h-[3rem] mt-[4rem] flex justify-around bg-cover">
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/twitter-svgrepo-com.svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[34px] hover:bg-blue"  style={{backgroundImage: 'url("/facebook-svgrepo-com (3).svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/youtube-svgrepo-com (1).svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/instagram-svgrepo-com.svg")',   }}></button>
      </div>
    </div>


<div className=" hidden md:block  h-[700px] bg-black" > 
<div className="w-full h-[1305x] pt-5 ">
        <div className="w-full  flex  justify-between pl-16 pr-7"> 
        <div className="flex justify-center text-center ">
        <p className=" tracking-widest goldtext modal-font-header mt-[3.4rem]  font-bold text-2xl"  > BANQUET HALLS
        
          <p className=" text-sm text-semibold">OF THE-MID SOUTH</p>
        </p>  
     
        </div>
        <div className=" w-[400px]">
        <p className="text-white  font-semibold text-sm mb-4 mt-7">Subscribe to get the latest newsletter</p>
         <input className="p-3 w-[70%] rounded-sm " type="email" name="" id="" />
         <button className=" p-3 colorgold rounded-sm text-white " > SUBSCRIBE</button>

      </div>
        </div>
      </div>


    

      <div className="flex w-full t mt-10 justify-between"> 
     <div className="w-[20%] pl-8">
        <div className="goldtext w-[90%] border-[#BC9C6F]  border-b pb-5"><p>VENUES</p></div>
        <div className="flex w-[40$] flex-col gap-3  mt-10">
            <Link className="text-white  tracking-wide  ">Rondevu</Link>
            <Link className="text-white  tracking-wide  ">All Occasion</Link>
            <Link className="text-white  tracking-wide  ">Aashiana Hall</Link>
            <Link className="text-white  tracking-wide  ">Bombay Ballroom</Link>
            <Link className="text-white  tracking-wide  ">UptownSocials901</Link>
            <Link className="text-white  tracking-wide  ">Bartlett Banquet Hall</Link>
    </div>
    </div>
        <div className="w-[75%]">
            <div className="goldtext w-[90%] border-b border-[#BC9C6F] pb-5"><p>EXPLORE</p></div>
            <div className="flex row  gap-10">
        <ul className="flex flex-col w-[100px] gap-3 pl-4 mt-10">
            <Link className="text-white  tracking-wide  ">Home</Link>
            <Link className="text-white  tracking-wide  ">Pricing</Link>
            <Link className="text-white  tracking-wide  ">Catering</Link>
            <Link className="text-white  tracking-wide  ">About Us</Link>
            <Link className="text-white  tracking-wide  ">Inquire</Link>
                 
        </ul>
        <ul className="flex flex-col gap-3 pl-4 pr-9 mt-10">
            <Link className="text-white  tracking-wide  ">Blog</Link>
            <Link className="text-white  tracking-wide  ">Careers</Link>
            <Link className="text-white  tracking-wide  ">FAQ</Link>
        </ul> 
 <ul className="flex  flex-col gap-3 pl-4 mt-10">
            <Link className="text-white  tracking-wide  ">Banqet Halls</Link>
            <Link className="text-white  tracking-wide  ">Event Planning</Link>
            <Link className="text-white  tracking-wide  ">Wedding Planning</Link>
            <Link className="text-white  tracking-wide  ">Wedding Venues</Link>
            <Link className="text-white  tracking-wide  ">Photoshoot Locations</Link>
            <Link className="text-white  tracking-wide  ">Floorplans</Link>
        </ul>
   <ul className="flex flex-col w-[220px] gap-3 pl-4 mt-10">
            <Link className="text-white  tracking-wide  ">Filming</Link>
            <Link className="text-white  tracking-wide  ">Preferred Vendors</Link>
            <Link className="text-white  tracking-wide  ">Press/Awards</Link>
            <Link className="text-white  tracking-wide  ">Testimonials</Link>
                 
        </ul>

        </div>
        </div>
      </div>


      <div className="bg-black h-[3rem] mt-[4rem] flex gap-8 pl-6 bg-cover">
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/twitter-svgrepo-com.svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[34px] hover:bg-blue"  style={{backgroundImage: 'url("/facebook-svgrepo-com (3).svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/youtube-svgrepo-com (1).svg")',   }}></button>
       <button className=" bg-contain bg-black h-[30px] w-[30px] hover:h-[35px] duration-300 hover:w-[35px]"  style={{backgroundImage: 'url("/instagram-svgrepo-com.svg")',   }}></button>
      </div> </div>
</>
  );
};

export default Footer;
