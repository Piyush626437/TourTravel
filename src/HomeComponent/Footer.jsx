import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <section className="footer-section my-4">
                <div className="conabouttainer">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h3>About Us</h3>
                                {/* &amp;=& */}
                                <p>"Join us on an unforgettable adventure where every day is a new discovery waiting to unfold." ...</p> </div> </div> <div className="col-md-4"> <div className="footer-widget"> <h3>Quick Links</h3> <ul> <li>    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li> <li><NavLink className="nav-link" to="/tourdetail">TourDetails</NavLink></li>
                                    <li> <NavLink className="nav-link" to="/about">AboutUs</NavLink></li>
                                    <li> <NavLink className="nav-link" to="/Contactus">ContactUs</NavLink></li>
                                </ul> </div> </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h3>Contact Info</h3> <ul> <li>Aman Singh Lodhi</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>8770327853</li>
                                    <li><i className="fa fa-envelope"></i> Enjoylifetours0909@gmail.com</li>
                                </ul>
                                <ul className="overflow-hidden">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Footer;
// export in home