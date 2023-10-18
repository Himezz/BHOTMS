import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Nav} from './comps/Nav'
import { Home } from "./comps/Home";
import { Pricing } from "./comps/Pricing";

import Aboutus from "./comps/aboutus";
import Mymodal from "./comps/mymodal";
import Footer from "./comps/footer";

 export const App = () => {
  const [modal, setModal] =useState(false)
const modalToggle = () => {
  console.log('Before toggle:', modal);
  setModal(!modal)
  console.log('After toggle:', modal);
}
  return (
    <Router> 
      <Nav modalToggle={modalToggle} isOpen={!modal} />
      
      <Routes>
      <Route path="/AboutUs" element={<Aboutus/>}/>
        <Route path="/BHOTMS/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
     
      </Routes>
      <Mymodal isOpen={modal} modalToggle={modalToggle}/>
     <Footer/>
    </Router>
  );
}


