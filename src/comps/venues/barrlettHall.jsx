import Venuepage from './Venuepages'
import { barimageList,barvideoList } from '../../constants/bb'
const BartlettBanquetHall = () => {
  return (
   <Venuepage  
   //1st section
   title={"Bartlett Banquet Hall: A Graceful and Unique Ambiance for Wedding Celebrations."}
   desc1={"Located in the bustling heart of Memphis, TN, the Bartlett Banquet Hall emanates elegance and versatility. Combining modern designs with timeless charm, this venue offers a pristine backdrop for occasions from lavish nuptials to prestigious corporate gatherings."}
   desc2={"Bartlett Banquet Hall, with its majestic architecture and cutting-edge facilities, stands as a symbol of opulence and distinction. Step into a world of refinement and let Bartlett's leading event venue transform your precious occasions into enduring memories."}

   //video/photo section
   imageList={barimageList}
   videoList={barvideoList}
   //image/amenities section 
   desc8={"Bartlett Banquet Hall in Memphis, TN, stands as a testament to classic Southern charm harmoniously intertwined with contemporary sophistication. Fully equipped with state-of-the-art facilities and amenities, this hall becomes the preferred choice for diverse events, from grandiose wedding receptions to esteemed corporate meetings. Our dedicated team, known for its meticulous attention to every detail – from seating arrangements to decor nuances, ensures that every event is executed to perfection. Dive into an experience where timeless tradition meets modern elegance in the heart of Memphis, only at Bartlett Banquet Hall"}
    img1={"./barttlett/bartlett6.jpg"}
    desc3={"Bartlett Banquet Hall in Memphis, TN, offers an atmosphere where tradition merges with elegance. Lavender-hued table settings shine under ambient lighting, accented by tall golden centerpieces holding delicate white floral arrangements. Chairs adorned with sequined sashes sit around tables set with golden plates and pristine napkins, creating an exquisite setting. The room, punctuated by draped curtains and subtle wall fixtures, presents an environment where every detail is a testament to refined taste and grandeur. It's the perfect backdrop for events that deserve an aura of sophistication and charm."}
    capacity={"Capacity: 100 Guests"}
    adress={"2758 Bartlett Blvd, Bartlett, TN 38134"}
    ul1={["State-of-the-art LED lighting system", "Stage for entertainment","Bridal lounge","Large foyer for guests"]}
  //customize section
  img2={"./bombaycake.jpg"}
   desc4={"As one of the most sought-after venues in Memphis, Bartlett Banquet Hall radiates romantic elegance. Its luxurious interiors are complemented by a welcoming foyer and our premium in-house catering. With a dedicated bridal suite for those intimate pre-ceremony moments, Bartlett Banquet Hall guarantees a day of cherished memories."}

   //events we host section
   desc5={"Bartlett Banquet Hall"}


   />
  )
}
export default BartlettBanquetHall