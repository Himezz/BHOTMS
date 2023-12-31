import React from 'react'
import Venuepage from './Venuepages'
import { bbimageList,bbvideoList } from '../../constants/bb'
const BombayBallroom = () => {
  return (
   <Venuepage  
   //1st section
   title={'Bombay Ballroom: A Fairy Tale Venue For The Most Extraordinary Weddings'}
   desc1={'Nestled in the heart of Memphis, TN, the Bombay Ballroom stands as an epitome of elegance and versatility. Combining modern design with timeless charm, this venue offers a perfect backdrop for any event, from opulent weddings to corporate gatherings.'}
   desc2={' With its spacious interiors and state-of-the-art amenities, Bombay Ballroom promises an experience thats both memorable and exquisite. Dive into a world of luxury and let Memphis premier event space transform your special moments into everlasting memories.'}

   //video/photo section
   imageList={bbimageList}
   videoList={bbvideoList}
   //image/amenities section 
   desc8={"Although Bombay Ballroom in Memphis, TN, exudes an aura of opulent elegance, reminiscent of the rich cultural tapestry of India. While its design is infused with the timeless charm of traditional Indian decor, the facilities and amenities are anything but dated. Boasting  a suite of modern equipment ranging from an advanced sound system to ambient mood lighting, the ballroom is primed to tailor any event to  the specific desires of our esteemed clientele. Whether it's a  lavish wedding reception or a corporate gala, Bombay Ballroom is the canvas upon which your dream event comes to vibrant life. Our dedicated team, with its unwavering commitment to excellence and meticulous attention to detail, will assist in orchestrating every facet of your event, from table settings to decor. Welcome to Bombay Ballroom, where traditions meet contemporary flair in the heart of Memphis."}
    img1={"./bombayballroomblack.jpg"}
    desc3={"If your taste is rooted in tradition yet seeks modern elegance, the Bombay Ballroom in Memphis, TN, is the embodiment of both. Classic archways juxtapose sleek wooden floors, while tables draped in monochrome hues showcase gold tableware and intricate crystal centerpieces. Combined with plush, regal seating and ambient lighting, the Ballroom strikes a balance between the age-old charm and contemporary sophistication, crafting an unparalleled backdrop for memorable events."}
    capacity={"Capacity: 150 Guests"}
    adress={"1725 Appling Road, Cordova, TN 38016"}
    ul1={["State-of-the-art LED lighting system", "Stage for entertainment","Bridal lounge","Large foyer for guests"]}

  //customize section
   img2={"./bombaycake.jpg"}
   desc4={" As one of the most romantic venues in Memphis, Bombay Ballroom exudes elegance. Its grand interiors echo European palaces, complemented by our inviting foyer and top-tier in-house catering. With a dedicated bridal suite for those special moments before the ceremony, Bombay Ballroom promises a memorable wedding day."}

   //events we host section
   desc5={"Bombay Ballroom"}

 
   />
  )
}

export default BombayBallroom