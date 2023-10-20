import React from "react";
import { Link } from "react-router-dom";
export const Venue = ({ imageURL, VenueName, Capacity,VenueNameDirectory}) => {
  return (
    <div className="group relative w-full h-full overflow-hidden">
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        className="w-full h-full  bg-center bg-cover duration-700 transition-opacity group-hover:opacity-80"
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center transform opacity-0 translate-y-10 duration-1000 hover:opacity-100 transition-transform z-10 group-hover:translate-y-2  ">
        <p className="text-white text-5xl modal-font-header mb-2 venue">{VenueName}</p>
        <p className="goldtext text-2xl  mb-6">{Capacity}</p>
        <Link to={`/BHOTMS/${VenueNameDirectory}`} className=" text-white px-4 py-2 font-bold outline duration-500 outline-color-venue custom-button">
          Explore Venue
        </Link>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-1000 backdrop-blur-sm z-1 group-hover:opacity-100"></div>

    </div>
  );
};
