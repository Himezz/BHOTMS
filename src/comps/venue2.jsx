import React from "react";
import { Link } from "react-router-dom";
const Venue2 = ({ imageURL, VenueName, Capacity,VenueNameDirectory,desc,adress}) => {
  return (<>
    
    <div className="w-[full] h-full flex justify-center items-center border-black border-2  ">
      <div className=" relative flex  flex-col  w-full  h-[600px] ">
        <div
          style={{ backgroundImage: `url(${imageURL})`, borderColor:'black', }}
          className="w-full h-full  border-b-2 border-[black] bg-center bg-cover "
        ></div>

    <div className=" w-full  ">
            <div className=" flex flex-col min-h-[370px] max-h-[750px]  w-full">
          <p className=" modal-font-header mt-7 text-center text-2xl font-medium tracking-wide  venue">
            {VenueName}
          </p>
          <p className="w-full text-center  text-slate-600 p-3">{desc}</p>
          <p className="text-center mt-4 text-slate-600">{adress}</p>
          <p className="goldtext font-semibold text-2xl text-center mt-5  ">{Capacity}</p>
          <div className="w-full flex justify-center  mb-6 z-10 mt-10" >
          <Link to={`/${VenueNameDirectory}`} className=" bg-white py-3 px-7 text-[#BC9C6F] hover:border-black hover:text-white border-[#BC9C6F] hover:bg-black text-sm    font-bold border-2 " >
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
