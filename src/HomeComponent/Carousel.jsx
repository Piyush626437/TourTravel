import React from 'react'
import im1 from "../Imge/im.jpg"
import im2 from "../Imge/img.jpg"
import im3 from "../Imge/3.jpg"
// import k1 from "../Imge/k1.jpg"
import k1 from "../Imge/k1.jpg"

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={k1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <section>
                                <h3>Welcome To Tourist</h3>
                                <h1>do come & wesite <span className="change "></span></h1>
                                <p>Enroll Now & Travell With Legends</p>
                                <button className="btn btn-danger">Maldives</button>
                                <button className="btn btn-primary">Dubai</button>
                                <button className="btn btn-danger">Thailand</button>
                            </section>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={im2} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder .</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={im3} className="d-block w-100 h-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Carousel;
// exported in {home}