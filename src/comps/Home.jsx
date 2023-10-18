import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Venue } from "./venue";
import Venue2 from "./venue2";
import Testimonials from "./testimonials";
import Slider from "./slider";
export const Home = () => {

  return ( <> <div className="flex w-full justify-center items-center"> <div className="  w-full max-w-[1700px]">
    <div className=" h-[1000px]     hidden md:grid  grid-cols-2 gap-2 bg-white mb-2 mx-3 ">
      <Venue imageURL={'./bombay-room.jpg' } VenueName={"Bombay Ballroom"} Capacity={"Capacity: 450 Guests"}/>
      <Venue imageURL={'./pink.webp'} VenueName={"Aashiana Hall"} Capacity={"Capacity: 350 Guests"}/>
      <Venue imageURL={'./Uptown-Wedding-tables.jpeg' }  VenueName={"UptownSocials901"} Capacity={"Capacity: 450 Guests"}/>
      <Venue imageURL={'./BBH-Gold-table.jpg'} VenueName={"Bartlett Banquet Hall"} Capacity={"Capacity: 150 Guests"}/>
      <Venue imageURL={'./Rondevu-B-&-W.jpeg' }  VenueName={"Rondevu"} Capacity={"Capacity: 450 Guests"}/>
      <Venue imageURL={'./All-Occasion-Pink.jpg'} VenueName={"All Occasion"} Capacity={"Capacity: 150 Guests"}/>
    </div></div></div>
    <div className="md:hidden max-w-full h-[2300px] w-full m-auto relative grid grid-cols-1 gap-5 ">
      <Venue2 imageURL={'./bombay-room.jpg' } VenueName={"Bombay Ballroom"} Capacity={"Capacity: 450 Guests"}/>
      <Venue2 imageURL={'./pink.webp'} VenueName={"Aashiana Hall"} Capacity={"Capacity: 350 Guests"}/>
      <Venue2 imageURL={'./Uptown-Wedding-tables.jpeg' }  VenueName={"UptownSocials901"} Capacity={"Capacity: 450 Guests"}/>
      <Venue2 imageURL={'./BBH-Gold-table.jpg'} VenueName={"Bartlett Banquet Hall"} Capacity={"Capacity: 150 Guests"}/>
      <Venue2 imageURL={'./Rondevu-B-&-W.jpeg' }  VenueName={"Rondevu"} Capacity={"Capacity: 450 Guests"}/>
      <Venue2 imageURL={'./All-Occasion-Pink.jpg'} VenueName={"All Occasion"} Capacity={"Capacity: 150 Guests"}/>
    </div>
  <Slider/>
    </>
  );
};
