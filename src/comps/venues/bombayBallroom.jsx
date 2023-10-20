import React from "react";
import { VenueSlider } from "./VenueSlider";
import { Link } from "react-router-dom";
const BombayBallroom = () => {
  return (
    <>
      <div className="w-full mt-3 gap-7 flex flex-col justify-center  px-5 ">
        <p className="text-center modal-font-header text-[1.65rem] tracking-wider text-slate-600">
          Bombay Ballroom: A Fairy Tale Venue For The Most Extraordinary
          Weddings
        </p>
        <p className="text-center modal-font-header  tracking-wider">
          {" "}
          Nestled in the heart of Memphis, TN, the Bombay Ballroom stands as an
          epitome of elegance and versatility. Combining modern design with
          timeless charm, this venue offers a perfect backdrop for any event,
          from opulent weddings to corporate gatherings.{" "}
        </p>
        <p className="text-center modal-font-header  tracking-wider">
          {" "}
          With its spacious interiors and state-of-the-art amenities, Bombay
          Ballroom promises an experience that's both memorable and exquisite.
          Dive into a world of luxury and let Memphis's premier event space
          transform your special moments into everlasting memories.{" "}
        </p>
      </div>

      <div className="mt-[5rem] flex flex-col gap-4">
        <button className="border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 w-[95%]  flex flex-col justify-center items-center mx-auto text-center">
          PHOTOS
        </button>
        <button className="border-2 text-[#BC9C6F] border-[#BC9C6F] font-semibold  text-sm tracking-wide p-3 w-[95%]  flex flex-col justify-center items-center mx-auto text-center">
          VIDEOS
        </button>
        <VenueSlider />
        <button className="mb-[6rem] mt-[3rem] md:mb-[rem10] py-3 w-[180px] text-sm mx-auto bg-slate-700 text-white font-bold">
          BOOKING INQUIRY
        </button>

        <div className="bg-[#eeecec] flex flex-col gap-4 p-5">
          <p className="text-center modal-font-header text-slate-800 text-2xl">
            Experience Our Unique Amenities At Grand Ballroom
          </p>
          <p className="text-center p-4 text-base text-slate-700 ">
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
      <div className="bg-[#eeecec]  p-5">
        <div
          className=" w-full h-[300px] bg-cover"
          style={{ backgroundImage: "url(./bombayballroomblack.jpg)" }}
        >
          {" "}
        </div>
        <div className="bg-slate-800 min-h-[626px] max-h-[900px] p-7">
          <p className="text-center text-white text-2xl modal-font-header pt-9">
            Amenities
          </p>
          <p className="text-slate-300 text-center  sm:p-3">
            If your taste is rooted in tradition yet seeks modern elegance, the
            Bombay Ballroom in Memphis, TN, is the embodiment of both. Classic
            archways juxtapose sleek wooden floors, while tables draped in
            monochrome hues showcase gold tableware and intricate crystal
            centerpieces. Combined with plush, regal seating and ambient
            lighting, the Ballroom strikes a balance between the age-old charm
            and contemporary sophistication, crafting an unparalleled backdrop
            for memorable events.
          </p>
          <div className="flex justify-center items-center">
            <p className="border  p-2 px-5 mt-4 text-center text-xl font-semibold text-white border-[#BC9C6F]">
              Capacity: 450 Guests
            </p>
          </div>
          <p className="text-center  text-[#BC9C6F] mt-4">
            1725 Appling Road, Cordova, TN 38016
          </p>
          <div className="flex justify-center items-center">
            <ul className="list-disc  mt-6 text-white ">
              <li>State-of-the-art LED lighting system </li>
              <li>Stage for entertainment </li>
              <li>Bridal lounge</li>
              <li>Large foyer for guests</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-[500px] p-3">
        <div
          className="w-full h-[200px] bg-cover"
          style={{ backgroundImage: "url(./bombaycake.jpg)" }}
        ></div>
        <p className="text-center modal-font-header text-2xl text-slate-700 mt-8">
          Customize Your Event At This Grand Venue
        </p>
        <p className="text-center p-4">
          At the Grand Ballroom in Memphis, we understand how much time and
          energy goes into planning an event. Because of this, we believe that
          everything should be as perfect as possible, and the event should be
          as unique as you want it to be. This is why we offer amenities that
          can be tailored to your exact vision. From the dishes to the decor to
          the dance floor decal, we are happy to work with you to shape our
          versatile ballroom to meet your specifications.
        </p>
      </div>

      <div className="bg-[#eeecec] p-4 min-h-[1000px] max-h-[2000px]">
        <p className="modal-font-header text-2xl text-center pt-[5.4rem] mb-5  font-medium ">
          Events We Host
        </p>
        <div className="border min-h-[200px] max-h-[2000px] bg-[#BC9C6F] border-[#BC9C6F]">
          <div className="border-2 min-h-[370px] border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(./weddingring2.svg)" }}
              ></div>
            </div>
            <div className="text-white text-center font-medium text-xl modal-font-header mt-3 ">
              Weddings
            </div>
            <p className="text-white text-center pb-[60px] pt-4 p-9">
              As one of the most romantic venues in Memphis, Bombay Ballroom
              exudes elegance. Its grand interiors echo European palaces,
              complemented by our inviting foyer and top-tier in-house catering.
              With a dedicated bridal suite for those special moments before the
              ceremony, Bombay Ballroom promises a memorable wedding day.
            </p>
          </div>
        </div>
        <div className="border min-h-[200px] max-h-[2000px] bg-[#BC9C6F] mt-4  border-[#BC9C6F]">
          <div className="border-2 min-h-[370px] border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(/cake.svg)" }}
              ></div>
            </div>
            <div className="text-white text-center font-medium text-xl modal-font-header mt-3 ">
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
        <div className="border min-h-[200px] max-h-[2000px] bg-[#BC9C6F] mt-4  border-[#BC9C6F]">
          <div className="border-2 min-h-[370px] border-white m-3">
            <div className="flex justify-center mt-5">
              <div
                className="h-[64px] w-[64px] bg-cover "
                style={{ backgroundImage: "url(./wineglasses.svg)" }}
              ></div>
            </div>
            <div className="text-white text-center font-medium text-xl modal-font-header mt-3 ">
              Corpotate Events
            </div>
            <p className="text-white text-center pb-[25px] pt-4 p-5">
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

      <div className="min-h-[500px] p-3"> 
         <div className="h-[200px] w-full bg-cover" style={{ backgroundImage:"url(./diningop.jpg)"}}></div>
         <div className="p-4">
         <p className="modal-font-header text-2xl text-center">Dining Options</p>
         <p className="text-center mt-5 ">Our experienced chefs will set your event apart with a menu that will be especially designed for you and your guests. With a wide variety of flavor profile options from around the world, you’re sure to find something deliciously ideal for your event. All of our banquet halls in the Mid south Serve the finest mouth-watering dishes for out guests. </p>
         <div className="flex justify-center mt-5">
         <Link className="border-2 p-3 px-6 font-semibold text-sm border-black tracking-wide">SEE DINING OPTIONS</Link>
         </div>
         </div>
        </div>
    </>
  );
};

export default BombayBallroom;
