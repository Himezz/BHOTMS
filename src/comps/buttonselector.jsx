import React from "react";
import { useState } from "react";
const Buttonselector = (active,onclick) => {

  return (
    <>
      <button onClick={() => onclick('PHOTOS')} className={active === "VIDEOS" ? "border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center" : "bg-[#BC9C6F] border-2 text-white border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center"}>
        PHOTOS
      </button>
      <button onClick={() => onclick('VIDEOS')} className= {active === "PHOTOS" ? "border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center" : "bg-[#BC9C6F] border-2 text-white border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center"}>
        VIDEOS
      </button>
    </>
  );
};

export default Buttonselector;
