import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../Imge/Logo.png"
const Navbar=()=>
{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img className='logo' src={Logo} width="60" height="30" alt=""/>
  </a>
</nav>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tourdetail">Tour Details</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">AboutUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contactus">ContactUs</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;