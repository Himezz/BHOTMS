import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Venue } from "./venue";
import Venue2 from "./venue2";
import Testimonials from "./testimonials";
import Slider from "./slider";
export const Home = () => {

  return ( <> <div className="flex w-full justify-center items-center"> <div className="  w-full max-w-[1700px]">
    <div className=" h-[1000px]     hidden md:grid  grid-cols-2 gap-2 bg-white mb-2 mx-3 ">
      <Venue imageURL={'./bombay-room.jpg' } VenueName={"Bombay Ballroom"} Capacity={"Capacity: 450 Guests"} VenueNameDirectory={"BombayBallroom"}/>
      <Venue imageURL={'./pink.webp'} VenueName={"Aashiana Hall"} Capacity={"Capacity: 350 Guests"}/>
      <Venue imageURL={'./Uptown-Wedding-tables.jpeg' }  VenueName={"UptownSocials901"} Capacity={"Capacity: 450 Guests"}/>
      <Venue imageURL={'./BBH-Gold-table.jpg'} VenueName={"Bartlett Banquet Hall"} Capacity={"Capacity: 150 Guests"}/>
      <Venue imageURL={'./Rondevu-B-&-W.jpeg' }  VenueName={"Rondevu"} Capacity={"Capacity: 450 Guests"}/>
      <Venue imageURL={'./All-Occasion-Pink.jpg'} VenueName={"All Occasion"} Capacity={"Capacity: 150 Guests"}/>
    </div></div></div>
    <div className="md:hidden max-w-full h-full p-4 w-full m-auto relative grid grid-cols-1 gap-8 ">
    <p className="text-center text-2xl modal-font-header text-slate-600">Our Premier Selection Of Event Venues</p>
      <Venue2 imageURL={'./bombay-room.jpg' } VenueName={"Bombay Ballroom"} Capacity={"Capacity: 450 Guests"} VenueNameDirectory={"BombayBallroom"} desc={"Perfect for grand-scale celebrations, the Elegant Hall in Memphis showcases a golden sunset backdrop with luxurious red draperies and a myriad of customizable features to make any event truly unforgettable."} adress={"1725 Appling Rd, Cordova, TN 38016"}/>
      <Venue2 imageURL={'./pink.webp'} VenueName={"Aashiana Hall"} Capacity={"Capacity: 350 Guests"} VenueNameDirectory={"AashianaHall"} adress={"360 New Byhalia Collierville, TN 38017"} desc={"Located in Memphis, Aashina Hall boasts elegant decor, adorned with delicate floral arrangements and beautifully set tables, providing a perfect setting for memorable occasions."}/>
      <Venue2 imageURL={'./Uptown-Wedding-tables.jpeg' }  VenueName={"UptownSocials901"} Capacity={"Capacity: 450 Guests"} VenueNameDirectory={"UptownSocials901"} adress={'594 N 2nd St, Memphis, TN 38105'} desc={" With its elegant wooden chairs, rich maroon accents, and meticulously set tables adorned with vibrant floral arrangements, this Memphis venue exudes warmth and charm, setting the stage for intimate celebrations and memorable gatherings."}/>
      <Venue2 imageURL={'./BBH-Gold-table.jpg'} VenueName={"Bartlett Banquet Hall"} Capacity={"Capacity: 150 Guests"} VenueNameDirectory={"BartlettBanquetHall"} adress={"2758 Bartlett Blvd, Bartlett, TN 38134"} desc={"Bathed in golden hues and complemented by pristine white chairs, this venue in Memphis offers a touch of regal elegance. The meticulous table settings and delicate floral centerpieces perfectly enhance the grandeur, making it an idyllic choice for any upscale event."} />
      <Venue2 imageURL={'./Rondevu-B-&-W.jpeg' }  VenueName={"Rondevu"} Capacity={"Capacity: 450 Guests"} VenueNameDirectory={"Rondevu"} adress={'2757 S Mendenhall Rd, Memphis, TN 38115'} desc={"Nestled in Memphis, this sophisticated venue showcases a blend of modern elegance with its transparent seating and striking black and white decor, creating a chic atmosphere ideal for upscale events and gatherings."}/>
      <Venue2 imageURL={'./All-Occasion-Pink.jpg'} VenueName={"All Occasion"} Capacity={"Capacity: 150 Guests"} VenueNameDirectory={"AllOccasion"} adress={'6090 Macon Cove, Memphis, TN 38134'} desc={"This Memphis venue radiates a soft elegance, with its pastel table settings and harmonious decorations. The spacious interior, coupled with the intricate drapery and floral centerpieces, sets a serene ambiance, ideal for intimate celebrations and gatherings."}/>
    </div>
  <Slider/>
    </>
  );
};
