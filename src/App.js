import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Components/Home"
import About from "./Components/About" //default export 
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import whatsapp from "./Imge/whatsapp.jpeg"

// import  Carousel from '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Contact from './Components/ContactUs';
// import TourDetail from "./Components/TourPackage"
import TourDetail from "./Components/TourDetail"
// import About from './Components/About';


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/tourdetail" element={<TourDetail />} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
      <div className="whatsapp_float"> <a href="https://wa.me/918815998314?text=Hello" target="_blank"><img src= {whatsapp} width="50px" class="whatsapp_float_btn"/></a>

</div>


      {/* <Router>
    <Routes>
    <Route extact path="/" element={<Home />} />
    <Route extact path="/about" element={<About/>} />
    </Routes>
   </Router> */}
    </>
  );
}

export default App;
