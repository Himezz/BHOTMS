import { useState, lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from './comps/Nav';
import Mymodal from "./comps/mymodal";
import Footer from "./comps/footer";
import BartlettBanquetHall from "./comps/venues/barrlettHall";

const Home = lazy(() => import("./comps/Home.jsx"));
const BombayBallroom = lazy(() => import("./comps/venues/bombayBallroom"));
const Pricing = lazy(() => import("./comps/Pricing"));
const Aboutus = lazy(() => import("./comps/aboutus"));
const AshinaHall = lazy(() => import("./comps/venues/aashinahall"));

export const App = () => {
  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    console.log('Before toggle:', modal);
    setModal(!modal);
    console.log('After toggle:', modal);
  }

  return (
    <Router>
      <Nav modalToggle={modalToggle} isOpen={!modal} />
      
      <Routes>
        <Route path="/AboutUs" element={
          <Suspense fallback={<div>Loading About Us...</div>}>
            <Aboutus />
          </Suspense>
        } />
        <Route path="/" element={
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        } />
        <Route path="/pricing" element={
          <Suspense fallback={<div>Loading Pricing...</div>}>
            <Pricing />
          </Suspense>
        } />
        <Route path="/BombayBallroom" element={
          <Suspense fallback={<div>Loading Bombay Ballroom...</div>}>
            <BombayBallroom />
          </Suspense>
        } />
        <Route path="/AashinaHall" element={
        <Suspense fallback={<div></div>}> 
        <AshinaHall /> 
        </Suspense>
      } /> 
      <Route path="/bartlettBanquetHall" element={
      <Suspense fallback={<div></div>}> 
          <BartlettBanquetHall/>
      </Suspense>}/>
     
      </Routes>

      <Mymodal isOpen={modal} modalToggle={modalToggle} />
      <Footer />
    </Router>
  );
}