import React from 'react'
import kedarnath1 from "../Imge/kedarnath1.jpeg"

const KedarnathTag = () => {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="lazy w-100 loaded" data-src="" src={kedarnath1} />
                        </div> <div className="col-md-6">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Get to know us</span>
                                <h2 className="section-title__title">Plan Your Trip With Us</h2>
                            </div>
                            <p>Trip Soul is a leading tour &amp; travel, destination management company based out of .<br/><a href="" className="btn btn-danger mt-4">Read More</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default KedarnathTag;