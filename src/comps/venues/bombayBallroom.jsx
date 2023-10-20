import React from "react";
import { VenueSlider } from "./VenueSlider";
import { Link } from "react-router-dom";
import Buttonselector from "../buttonselector";
import { useState } from "react";
const BombayBallroom = () => {
  const [active, setActiveButton] = useState('PHOTOS');
   
  const handleButtonClick = (type) => {
      if (type !== active) {
          setActiveButton(type)
      }
  
  }

  return (
    <>
      <div className="w-full mt-3 gap-7 flex flex-col justify-center  px-5 ">
        <p className="text-center modal-font-header md:text-4xl text-[1.65rem] tracking-wider text-slate-600">
          Bombay Ballroom: A Fairy Tale Venue For The Most Extraordinary
          Weddings
        </p>
        <p className="text-center modal-font-header md:text-xl tracking-wider">
          {" "}
          Nestled in the heart of Memphis, TN, the Bombay Ballroom stands as an
          epitome of elegance and versatility. Combining modern design with
          timeless charm, this venue offers a perfect backdrop for any event,
          from opulent weddings to corporate gatherings.{" "}
        </p>
        <p className="text-center modal-font-header md:text-xl tracking-wider">
          {" "}
          With its spacious interiors and state-of-the-art amenities, Bombay
          Ballroom promises an experience that's both memorable and exquisite.
          Dive into a world of luxury and let Memphis's premier event space
          transform your special moments into everlasting memories.{" "}
        </p>
      </div>
 
      <div className="mt-[5rem] flex flex-col -row gap-4">
        <div className="flex-col flex md:flex-row gap-2">
        <button onClick={() => handleButtonClick('PHOTOS')} className={active === "VIDEOS" ? "border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center" : "bg-[#BC9C6F] border-2 text-white border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center"}>
        PHOTOS
      </button>
      <button onClick={() => handleButtonClick('VIDEOS')} className= {active === "PHOTOS" ? "border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center" : "bg-[#BC9C6F] border-2 text-white border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 md:w-[35%] w-[95%] mx-auto text-center"}>
        VIDEOS
      </button>
        </div>
        <VenueSlider active={active} />
        <button className="mb-[4rem] mt-[3rem] md:mb-[rem10] py-3 w-[180px] text-sm mx-auto bg-slate-700 text-white font-bold">
          BOOKING INQUIRY
        </button>

        <div className="bg-[#eeecec] flex flex-col gap-4 p-5">
          <p className="text-center modal-font-header md:text-4xl text-slate-800 text-2xl">
            Experience Our Unique Amenities At Grand Ballroom
          </p>
          <p className="text-center p-4 mdLtext-lg text-base text-slate-700 ">
            Although Bombay Ballroom in Memphis, TN, exudes an aura of opulent
            elegance, reminiscent of the rich cultural tapestry of India. While
            its design is infused with the timeless charm of traditional Indian
            decor, the facilities and amenities are anything but dated. Boasting
            a suite of modern equipment ranging from an advanced sound system to
            ambient mood lighting, the ballroom is primed to tailor any event to
            the specific desires of our esteemed clientele. Whether it's a
            lavish wedding reception or a corporate gala, Bombay Ballroom is the
            canvas upon which your dream event comes to vibrant life. Our
            dedicated team, with its unwavering commitment to excellence and
            meticulous attention to detail, will assist in orchestrating every
            facet of your event, from table settings to decor. Welcome to Bombay
            Ballroom, where traditions meet contemporary flair in the heart of
            Memphis.
          </p>
        </div>
      </div>
      <div className="bg-[#eeecec]  md:flex p-5">
        <div
          className=" md:w-[50%] h-[700px] bg-cover"
          style={{ backgroundImage: "url(./bombayballroomblack.jpg)" }}
        >
          {" "}
        </div>
        <div className="bg-slate-800 md:w-[50%] min-h-[626px] max-h-[900px] p-7">
          <p className="text-center md:text-left text-white text-4xl tracking-wid md:font-semibold font-medium modal-font-header pt-5">
            Amenities
          </p>
          <p className="text-slate-300 md:text-left text-center mt-4   sm:p-">
            If your taste is rooted in tradition yet seeks modern elegance, the
            Bombay Ballroom in Memphis, TN, is the embodiment of both. Classic
            archways juxtapose sleek wooden floors, while tables draped in
            monochrome hues showcase gold tableware and intricate crystal
            centerpieces. Combined with plush, regal seating and ambient
            lighting, the Ballroom strikes a balance between the age-old charm
            and contemporary sophistication, crafting an unparalleled backdrop
            for memorable events.
          </p>
          <div className="flex md:justify-start md:items-start justify-center items-center">
            <p className="border  p-2 px-5 mt-4 text-center text-xl font-semibold text-white border-[#BC9C6F]">
              Capacity: 450 Guests
            </p>
          </div>
          <p className="text-center md:text-left text-[#BC9C6F] mt-4">
            1725 Appling Road, Cordova, TN 38016
          </p>
          <div className="flex justify-center md:justify-start md:pl-3  items-center">
            <ul className="list-disc  mt-6 text-white ">
              <li>State-of-the-art LED lighting system </li>
              <li>Stage for entertainment </li>
              <li>Bridal lounge</li>
              <li>Large foyer for guests</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-[460px] md:pt-0 md:pb-0 md:flex p-3 border border-black">
        <div
          className="w-full md:w-[45%] h-[200px] md:h-[460px] bg-cover"
          style={{ backgroundImage: "url(./bombaycake.jpg)" }}
        ></div>
         <div className="md:w-[55%] md:h-[460px]  md:pt-0 md:p-10">
        <p className="text-center md:text-left md:text-5xl line modal-font-header text-2xl text-slate-700 mt-8">
          Customize Your Event At This Grand Venue
        </p>
        <p className="text-center md:text-left md:p-0 md:mt-6 p-4">
          At the Grand Ballroom in Memphis, we understand how much time and
          energy goes into planning an event. Because of this, we believe that
          everything should be as perfect as possible, and the event should be
          as unique as you want it to be. This is why we offer amenities that
          can be tailored to your exact vision. From the dishes to the decor to
          the dance floor decal, we are happy to work with you to shape our
          versatile ballroom to meet your specifications.
        </p>
        </div>
      </div>

      <div className="bg-[#eeecec]  p-4 min-h-[1000px] max-h-[2000px]">
        <p className="modal-font-header md:text-4xl md:pt-[5rem]  text-2xl text-center  pt-[3rem] mb-5  font-medium ">
          Events We Host
        </p>
         <div className="md:flex md:gap-4 md:px-3 md:justify-center ">
        <div className="border min-h-[200px] md:mt-4 max-h-[2000px] md:min-w-[33.33%]  md:max-w-[400px] bg-[#BC9C6F] border-[#BC9C6F]">
          <div className="border-2 min-h-[370px] md:min-h-[97%]  border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(./weddingring2.svg)" }}
              ></div>
            </div>
            <div className="text-white text-center font-semibold text-xl modal-font-header mt-3 ">
              Weddings
            </div>
            <p className="text-white text-center md:text-lg pb-[60px] pt-4 md:p-7 p-9">
              As one of the most romantic venues in Memphis, Bombay Ballroom
              exudes elegance. Its grand interiors echo European palaces,
              complemented by our inviting foyer and top-tier in-house catering.
              With a dedicated bridal suite for those special moments before the
              ceremony, Bombay Ballroom promises a memorable wedding day.
            </p>
          </div>
        </div>
        <div className="border min-h-[200px] max-h-[2000px] bg-[#BC9C6F] mt-4  border-[#BC9C6F] md:min-w-[33.33%] md:max-w-[400px]">
          <div className="border-2 min-h-[370px] md:min-h-[97%]  border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(./cake.svg)" }}
              ></div>
            </div>
            <div className="text-white   text-center font-semibold text-xl modal-font-header mt-3 ">
              Special Occasions
            </div>
            <p className="text-white text-center pb-[25px] pt-4 p-9">
            Celebrate like royalty at Bombay Ballroom in Memphis! No matter if you’re looking for a birthday party venue or a space to host your anniversary, shower, christening, or any other special occasion, we have you covered.
            </p>
            <ul className="list-disc text-white pl-[3.4rem] pb-6 ">
              <li>Birthday Parties</li>
              <li>Quinceañeras</li>
              <li>Baby Showers</li>
              <li>Anniversaries</li>
              <li>Bar/Bat Mitzvahs</li>
              <li>Bridal Showers</li>
              <li>Engagement Parties</li>
              <li>Christenings & Baptisms</li>
            </ul>
          </div>
        </div>
        <div className="border min-h-[200px] max-h-[2000px] bg-[#BC9C6F] mt-4 md:min-w-[33.33%]  md:max-w-[400px]  border-[#BC9C6F]">
          <div className="border-2 min-h-[370px] md:min-h-[97%]  border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(./wineglasses.svg)" }}
              ></div>
            </div>
            <div className="text-white font-semibold text-center  text-xl modal-font-header mt-3 ">
              Corpotate Events
            </div>
            <p className="text-white text-center pb-[25px] md:text-lg pt-4 p-5">
            When you’re looking to impress, Bombay Ballroom offers a beautiful space that is perfect for awards ceremonies, company galas, and fundraisers. Our atmosphere, cuisine, and service are unsurpassed.
            </p>
            <ul className="list-disc text-white pl-[3.4rem] pb-6 ">
              <li>Fundrraisimg Galas</li>
              <li>Awards Ceremonies</li>
              <li>Charity Events</li>
              <li>Company Lucheons</li>
              <li>Product Lauches</li>
              <li>Holidat Parties</li>
              <li>Team Building events 
              </li>
              <li>Filming</li>
            </ul>
          </div>
        </div>
         </div>
      </div> 

      <div className="min-h-[500px] md:min-h-[200px] md:max-h-[1000px] md:flex  border-2 md:p-0 border-black p-3"> 
         <div className="h-[250px] w-full md:min-h-[460px] md:w-[50%] bg-cover" style={{ backgroundImage:"url(./diningop2.jpg)"}}></div>
         <div className="p-4 md:w-[50%] md:mt-4 md:pl-8">
         <p className="modal-font-header text-2xl md:text-4xl md:text-left text-center">Dining Options</p>
         <p className="text-center mt-5 md:text-left md:text-lg ">Our experienced chefs will set your event apart with a menu that will be especially designed for you and your guests. With a wide variety of flavor profile options from around the world, you’re sure to find something deliciously ideal for your event. All of our banquet halls in the Mid south Serve the finest mouth-watering dishes for out guests. </p>
         <div className="flex justify-center mt-5 md:justify-start">
         <Link className="border-2 p-3 px-6 font-semibold text-sm md:mt-6 border-black tracking-wide">SEE DINING OPTIONS</Link>
         </div>
         </div>
        </div>
    </>
  );
};

export default BombayBallroom;
