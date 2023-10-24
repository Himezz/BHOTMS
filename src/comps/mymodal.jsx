
import Modalsections from "./modal-sections";
import Modalsection2 from "./modal-sections-2";


const Mymodal = ({isOpen,modalToggle}) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-600 transition-opacity bg-black bg-opacity-30 backdrop-blur-sm z-50`}>

    <div className={`fixed inset-0 flex justify-center items-center duration-700 transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"} `}>
     
      <div className="bg-white h-[640px]   mx-3 px-4 md:py-9 w-full max-w-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl ">
      <div className="text-right "><button className="text-yellow-600 font-semibold text-xl " onClick={modalToggle}> X</button></div>
      
        <div className="grid  gap-2 text-center ">
          <span className="text-yellow-600 contact-font tracking-widest text-xs ">
            CONTACT US
          </span>
          <h1 className="modal-font-header tracking-widest font-medium  md:text-2xl  margin-lol ">
            LET'S GET THIS PARTY STARTED
          </h1>
        </div> 

        <div className="flex-row hidden md:flex mt-8 items-stretch gap-2 h-[400px]">
          <Modalsections  imageurl={"./inquiresvgs/calendar-svgrepo-com.svg"}
            text1={"CHECK AVAILABILITY & SECURE YOUR DATE"}
            text2={
              "Place your deposit with confidence. Change your event date or cancel your booking for a full refund within 7 days."
            }
            text3={"SECURE YOUR DATE"}
            shouldRenderBorder={true}
            height={'57px'}
            width={'58px'}
          />
          <Modalsections
            imageurl={"./inquiresvgs/building-house-landmark-svgrepo-com.svg"}
            text1={"SCHEDULE A TOUR"}
            text2={
              "Explore our venues with our team to discuss how we can bring your vision to life."
            }
            text3={"SCHEDULE A TOUR"}
            shouldRenderBorder={true}
          />
          <Modalsections
            imageurl={"./inquiresvgs/handshake-deal-svgrepo-com.svg"}
            text1={"CONTACT US"}
            text2={
              "Connect with our team of experts to tell us more about your special day."
            }
            text3={"CONTACT US"}
            height={'75px'}
            width={'75px'}
          />
        </div>

        <div className=" md:hidden  flex-col items-stretch gap-2 h-[400px]"> 
        <Modalsection2 imageurl={"./inquiresvgs/calendar-svgrepo-com.svg"} text1={'CHECK AVAILABILITY & SECURE YOUR DATE'} text2={'Place your deposit with confidence. Change your event date or cancel your booking for a full refund within 7 days.'} text3={'SECURE YOUR DATE'} width={'45px'} height={'45px'} minWidth={'45px'}/>
        <Modalsection2 imageurl={"./inquiresvgs/building-house-landmark-svgrepo-com.svg"}  text1={'SCHEDULE A TOUR'} text2={'Explore our venues with our team to discuss how we can bring your vision to life.'} text3={'SCHEDULE A TOUR'} width={'60px'} height={'60px'} minWidth={'60px'}/>
        <Modalsection2   imageurl={"./inquiresvgs/handshake-deal-svgrepo-com.svg"} text1={'CONTACT US'} text2={'Connect with our team of experts to tell us more about your special day.'} text3={'CONTACT US'} width={'50px'} height={'50px'} minWidth={'50px'} /> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mymodal;
