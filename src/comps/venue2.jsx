import React from "react";
import { Link } from "react-router-dom";
const Venue2 = ({ imageURL, VenueName, Capacity,VenueNameDirectory,desc,adress}) => {
  return (<>
    
    <div className="w-[full] h-full flex justify-center items-center border- border-2  ">
      <div className=" relative flex  flex-col  w-full  h-[550px] ">
        <div
          style={{ backgroundImage: `url(${imageURL})`,  }}
          className="w-full h-[600px]  border-b-2  bg-center bg-cover "
        ></div>

    <div className=" w-full  ">
            <div className=" flex flex-col h-[300px]  w-full">
          <p className="  mt-9 text-center text-2xl z-0 font-sans font-semibold tracking-wide  ">
            {VenueName}
          </p>
          <p className="w-full text-center text-xs text-slate-600 p-3 no-select">{desc}</p>
          <p className="text-center text-sm mt-1 text-slate-600">{adress}</p>
          <p className="goldtext font-semibold text-xl text-center mt-1  ">{Capacity}</p>
          <div className="w-full flex justify-center  mb-6 z-10 mt-5" >
          <Link to={`/${VenueNameDirectory}`} className=" bg-white py-2 px-7 text-[#BC9C6F] hover:border-black hover:text-white border-[#BC9C6F] hover:bg-black text-sm    font-bold border-2 " >
              EXPLORE VENUE
          </Link> 
          </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Venue2;
