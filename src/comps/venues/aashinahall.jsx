import React from 'react'
import Venuepage from './Venuepages'
import { bbvideoList,ashimageList } from '../../constants/bb';

const AashinaHall = () => {
  return (
   <Venuepage  
   //1st section
   title={"Aashina Hall: An Elegant and Distinctive Setting for Bridal Events."}
   desc1={"Located in the vibrant core of Memphis, TN, the Aashina Hall radiates with sophistication and adaptability. Merging contemporary aesthetics with classic allure, this venue presents an impeccable canvas for events ranging from grand weddings to esteemed business affairs."}
   desc2={"With Its grand architecture and state-of-the-art amenities make Aashina Hall a beacon of luxury and sophistication. Venture into an atmosphere of elegance and allow Memphis's premier event venue to turn your cherished moments into timeless memories."}

   //video/photo section
   imageList={ashimageList}
   videoList={bbvideoList}
   //image/amenities section 
    desc8={"Although Aashina Hall in Memphis TN, emanates a resplendent grace, echoing the architectural wonders of classic design. While its structure marries the eternal beauty of renaissance motifs, the hall is fortified with state-of-the-art facilities. Featuring an array of modern amenities from a cutting-edge sound system to versatile mood lighting, Aashina Hall is ready to mold any event to the precise visions of our valued guests. Be it a sumptuous wedding fête or an elite business summit, Aashina Hall becomes the platform where your envisioned event springs into colorful existence. Our devoted crew, driven by an undying zeal for perfection and an acute eye for intricacies, will guide every aspect of your gathering, from table layouts to thematic decor. Step into Aashina Hall, where timeless elegance seamlessly blends with modern sophistication in Memphis's core."}
     img1={"./AashinaHall/AashinaHall3.jpg"}
     desc3={"If you're drawn to classic elegance but appreciate modern touches, Aashina Hall in Memphis, TN, might just be your ideal venue. The hall's classic arches harmoniously blend with its contemporary wooden flooring. Tables, set in muted tones, are accentuated with shimmering gold tableware and exquisite crystal centerpieces. The luxurious seating, complemented by the soft glow of ambient lighting, ensures Aashina Hall seamlessly melds age-old grandeur with a fresh sophistication, making it a prime choice for events that aim to leave a lasting impression."}  
    capacity={"Capacity: 100 Guests"}
    adress={"360 New Byhalia Rd, Collierville, TN 38017"}
    ul1={["State-of-the-art LED lighting system", "Stage for entertainment","Bridal lounge","Large foyer for guests"]}

  //customize section
  img2={"./bombaycake.jpg"}
   desc4={"As one of the most enchanting venues in Memphis, Aashina Hall radiates sheer grace. Its magnificent interiors are reminiscent of European chateaus, paired beautifully with our welcoming entrance area and premier in-house culinary services. Featuring a special bridal suite for those intimate moments preceding the vows, Aashina Hall guarantees a wedding day to cherish forever."}

   //events we host section
   desc5={"Aashina Hall"}


   />
  )
}

export default AashinaHall;