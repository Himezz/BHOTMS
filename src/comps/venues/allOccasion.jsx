import Venuepage from './Venuepages'
import { allimageList,barvideoList } from '../../constants/bb'
const AllOccasion = () => {
  return (
   <Venuepage  
   //1st section
   title={"All Occasion Venue: An Enchanting and Distinctive Setting for All Your Celebratory Events."}
   desc1={"Situated in the bustling heart of Memphis, TN, All Occasion shines as a beacon of modern elegance and versatility. Blending sleek contemporary designs with a touch of timeless charm, this venue offers a flawless backdrop for occasions spanning from lavish weddings to prestigious corporate gatherings."}
   desc2={"With its majestic design and cutting-edge facilities, All Occasion stands as a symbol of opulence and refinement. Step into a world of class and let Memphis's foremost event venue transform your special occasions into enduring memories."}

   //video/photo section
   imageList={allimageList}
   videoList={barvideoList}
   //image/amenities section 
   desc8={"Athough All Occasion in Memphis, TN, radiates an unmatched elegance, reminiscent of classical architectural marvels, its foundation is deeply rooted in contemporary design principles. While it showcases the timeless charm of age-old patterns, the venue is equipped with the latest in event technology. Boasting features like an advanced sound system and adaptable lighting arrangements, All Occasion is poised to tailor any event according to the unique aspirations of our esteemed clientele. Whether you're planning an extravagant wedding celebration or a high-profile corporate convention, All Occasion is the stage where your dream event takes shape. Our dedicated team, fueled by a passion for excellence and a keen attention to detail, oversees every facet of your event, from seating configurations to theme-based embellishments. Experience All Occasion, where ageless grandeur meets contemporary finesse at the heart of Memphis."}
    img1={"./allOccasion/allocc.jpg"}
    desc3={"For those who find themselves enamored by timeless sophistication, All Occasion in Memphis, TN, offers a unique blend of tradition and modernity. The venue showcases classic architectural elements intertwined with sleek contemporary designs. Tables draped in refined shades are enhanced by gleaming gold tableware and the delicate luminance of crystal decor. Coupled with plush seating and the soft allure of ambient lighting, All Occasion stands as the epitome of elegance, perfect for events desiring an unforgettable ambiance."}
    capacity={"Capacity: 125 Guests"}
    adress={"6090 Macon Cove, Memphis, TN 38134"}
    ul1={["State-of-the-art LED lighting system", "Stage for entertainment","Bridal lounge","Large foyer for guests"]}
  //customize section
  img2={"./bombaycake.jpg"}
   desc4={"In the heart of Memphis, All Occasion emerges as a beacon of pure elegance. With its splendid interiors, it leads guests to a warm and inviting foyer. Complemented by our top-notch catering services, the venue also boasts a dedicated bridal suite, offering a serene retreat for those precious moments before the main event. At All Occasion, we turn every gathering into a memorable celebration."}

   //events we host section
   desc5={"All Occasion"}


   />
  )
}
export default AllOccasion