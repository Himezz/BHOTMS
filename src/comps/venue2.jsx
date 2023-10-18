import React from "react";

const Venue2 = ({ imageURL, VenueName, Capacity }) => {
  return (
    <div className="w-full max-w-[600px] h-full flex  mx-auto color-lol border-2   ">
      <div className=" relative flex  flex-col  w-full h-[350px] ">
        <div
          style={{ backgroundImage: `url(${imageURL})`, borderWidth:'3px', borderColor:'#BC9C6F',borderLeft: '2px' }}
          className="w-full h-full  bg-center bg-cover "
        ></div>

    <div className=" flex   justify-center    ">
            <div className=" text-center w-[300px]">
          <p className=" goldtext text-2xl font-semibold tracking-wide  venue">
            {VenueName}
          </p>
          <p className="goldtext text-xl    ">{Capacity}</p>
          <div className="w-full flex  justify-center mt-4">
          <button className=" text-white  bg-[#BC9C6F] text-sm  p-2 font-bold outline ">
            Explore Venue
          </button> 
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Venue2;
