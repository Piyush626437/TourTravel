import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Components/Home"
import About from "./Components/About" //default export 
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"

// import  Carousel from '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Contact from './Components/ContactUs';
// import TourDetail from "./Components/TourPackage"
import TourDetail from "./Components/TourDetail"


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/tourdetail" element={<TourDetail />} />
      </Routes>


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
