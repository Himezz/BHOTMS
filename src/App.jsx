import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import {Nav} from './comps/Nav'
import { Home } from "./comps/Home";
import { Pricing } from "./comps/Pricing";

import Aboutus from "./comps/aboutus";
import Mymodal from "./comps/mymodal";
import Footer from "./comps/footer";

import BombayBallroom from "./comps/venues/bombayBallroom";

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
         <Route path="/BHOTMS/BombayBallroom" element={<BombayBallroom/>}/>
      </Routes>
      <Mymodal isOpen={modal} modalToggle={modalToggle}/>
     <Footer/>
    </Router>
  );
}


