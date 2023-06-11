import React from 'react'
import { NavLink } from 'react-router-dom';
const Aboutus=()=>
{
    return (
        <>
        <div className="aboutbody">
   
        
    <section className="about">
           <div className="main">
            <img src="./files/aboutpic.png" alt="My Photo"/>
            <div className="abt-text">
                <h1>About <span>Us</span></h1>
                <p>Firstflight Travels is a travel website project developed by Mohd. Rahil using HTML, CSS and JavaScript.</p>
                <a href="" className="connectbtn" target="_blank">Connect with me!</a>

                <div className="connect-section">

                    <div className="social-icons">
                        <a href="" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href="" target="_blank"><i className="fa fa-instagram" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-twitter-square"  ></i></a>
                        <a href="" target="_blank"><i className="fa fa-linkedin-square" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="" target="_blank"><i className="fa fa-whatsapp"></i></a>
                    </div>

                </div>
            </div>
            

           </div>
           

    </section>
    <section className="footer">
    <div className="foot">
        <div className="footer-content">
            
            <div className="footlinks">
                <h4>Quick Links</h4>
                <ul>
                <li> <NavLink className="nav-link" to="/">Home</NavLink></li>
                <li> <NavLink className="nav-link" to="/about">AboutUs</NavLink></li>
                <li> <NavLink className="nav-link" to="/Contactus">ContactUs</NavLink></li>
                </ul>
            </div>

            <div className="footlinks">
                <h4>Connect</h4>
                <div className="social">
                <a href="" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href="" target="_blank"><i className="fa fa-instagram" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-twitter-square"  ></i></a>
                        <a href="" target="_blank"><i className="fa fa-linkedin-square" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="" target="_blank"><i className="fa fa-whatsapp"></i></a>
                </div>
            </div>
            
        </div>
    </div>

   
</section>
        </div>
        </>
    );
}
export default Aboutus;