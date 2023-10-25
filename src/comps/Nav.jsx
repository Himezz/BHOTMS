import { useState, useEffect,useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Typed from "typed.js";
export const Nav = ({ isOpen, modalToggle }) => {
  const typedRef = useRef(null); // This ref is added

  useEffect(() => {
    const options = {
      strings: [
        "WE ARE WEDDING EXPERTS!",
        "WE ARE EVENT SPECIALIST!",
        "WE ARE PARTY PERFECTIONIST!",
        "WE ARE OCCASION VISIONARIES!",
      ],
      typeSpeed: 90,
      backSpeed: 70,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };
  const handleButtonClicked = () => {
    modalToggle(); // Call modalToggle
    handleNav(); // Call handleNav
  };
  const linksData = [
    { to: "", text: "HOME" },
    { to: "/Pricing", text: "PRICING" },
    { to: "/Catering", text: "CATERING" },
    { to: "/AboutUs", text: "ABOUT US" },
  ];
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle link clicks
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return ( <div className="sticky bg-white top-0 z-50">
    <div className="h-10 flex bg-white justify-between tracking-wide font-semibold goldtext items-center mx-2 sm:mx-8 border-b-1  color-lol "> 
    <ul className=" text-xs sm:text-base">OFFERS</ul>
    <ul className="goldtext font-semibold sm:text-base text-xs text-center">
        <span ref={typedRef}></span>
      </ul>
    <div className="flex justify-between  ">
    <button  className="h-[13px] w-[13px]  sm:h-[16px] sm:w-[16px] mr-2 mt-1 "> <img src=".\phone.svg" alt="" /></button>
      <button  className="h-[13px] w-[13px] sm:h-[16px] sm:w-[16px] mr-2 mt-1"> <img src=".\chat.svg" alt="" /></button>
      <p className="sm:text-base text-sm">901.690.3671</p>
      </div>
    </div>
    <div className="flex items-center bg-white justify-between max-w-[1700px] h-16 sm:h-24  mx-auto px-2 sm:px-4 ">
      <ul>
        <li className="text-2xl md:text-3xl tracking-wide font-medium w-full goldtext sm:pl-7 modal-font-header">
          BANQUET HALLS
          <li className="text-sm font-serif text-center modal-font-header">
            OF THE-MID SOUTH
          </li>
        </li>
      </ul>
      <ul className="hidden lg:flex">
        {linksData.map((link, index) => (
          <li
            className=" text-base font-bold linkfont p-4 duration-500  custom-link self-center text-black tracking-widest"
            key={link.to}
          >
            <Link to={link.to} className="relative">
              <span
                onClick={() => handleLinkClick(index)}
                className={
                  index === activeLink ? " " : "hover:underline-middle"
                }
              >
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>{" "}
      
        <button
          className="colorgold text-white md:px-8 px-2 h-10 font-semibold text-base self-center  tracking-widest"
          onClick={modalToggle} >INQUIRE
        </button>
     
      <div onClick={handleNav} className="block lg:hidden goldtext">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={32} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r-gray-500 bg-[#BC9C6F] ease-in-out duration-500 z-20"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-3xl p-4 pl-9 w-full text-white logo">
        <li className="text-2xl md:text-2xl tracking-wide w-[250px] font-medium  modal-font-header">
          BANQUET HALLS
          <li className="text-sm font-serif text-center mr-10 modal-font-header">
            OF THE-MID SOUTH
          </li>
        </li>
        </ul>
        <ul className="m-4 uppercase">
          {linksData.map((link) => (
            <li className="text-white p-4 border-b" key={link.to}>
              <Link onClick={handleNav} to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}

          <button
            className=" text-white p-4 border-b w-full text-left "
            onClick={handleButtonClicked}
          >
            INQUIRE
          </button>
        </ul>
      </div>
    </div>
  </div>
  );
};
