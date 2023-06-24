import React from 'react'
import { NavLink } from 'react-router-dom';
import About_img from "../Imge/About_img.png"

const Aboutus=()=>
{
    return (
        <>
        <div className="aboutbody">
   
        
    <section className="about">
           <div className="main">
            {/* <img src={About_img} width="40" alt="My Photo"/> */}
            <div className="abt-text">
                <h1>About <span>Us</span></h1>
                <p>Welcome to AM Tour And Travels `Enjoy Life Tours‘ ! We are a group of experienced and knowledgeable tour guides who are passionate about showing our guests the best trips of their life. We offer a variety of tours, from historical walking tours to nature walks to food tours. We can tailor our tours to your interests and needs, so you can be sure to have a memorable experience.

Our tours are led by experienced guides who are experts in their field. They will share their knowledge and enthusiasm with you, and help you to make the most of your visit. We also offer a variety of activities and excursions, so you can explore your trips at your own pace.

We hope to see you soon!.</p>
                <a href="https://instagram.com/enjoy_your_life_tours?igshid=NTc4MTIwNjQ2YQ==" className="connectbtn" target="_blank">Connect with me!</a>

                <div className="connect-section">

                    <div className="social-icons">
                        <a href="" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href="https://instagram.com/enjoy_your_life_tours?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><i className="fa fa-instagram" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-twitter-square"  ></i></a>
                        <a href="" target="_blank"><i className="fa fa-linkedin-square" ></i></a>
                        <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="https://wa.me/918770327853?text=Hello" target="_blank"><i className="fa fa-whatsapp"></i></a>
                    </div>

                </div>
            </div>
            

           </div>
           

    </section>
    {/* <section className="footer">
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

   
</section> */}

        </div>
        </>
    );
}
export default Aboutus;