import React from 'react'
import s1 from "../Imge/s1.png"
import s2 from "../Imge/s2.png"
import s3 from "../Imge/s3.png"
const ServiceTag = () => {
    return (
        <>
            <section id="service" className="service">
                <div className="container">
                    <div className="row service-counter text-center">
                        <div className="col-md-4">
                            <div className="single-service-box">
                                <div className="service-img">
                                    <img src={s1} alt="service-icon" />
                                </div>
                                <div className="service-content"> <h3 className="text-uppercase"> amazing tour packages </h3>
                                    <p>Handpicked holidays for you.</p> </div> </div> </div>
                        <div className="col-md-4"> <div className="single-service-box">
                            <div className="service-img">
                                 <img src={s2} alt="service-icon"/>
                            </div> 
                            {/* <!--/.service-img-->  */}
                            <div className="service-content">
                                <h3 className="text-uppercase"> book top class hotel </h3>
                                <p>We provide only Top rated hotels.</p>
                            </div> </div> </div>
                        <div className="col-md-4">
                            <div className="single-service-box">
                                <div className="statistics-img">
                                    <img src={s3} alt="service-icon" /> </div>
                                {/* <!--/.service-img--> */}
                                <div className="service-content">
                                    <h3 className="text-uppercase"> transport booking </h3>
                                    <p>We do all kinds of transport booking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServiceTag;

// exported in home