import React from 'react'


import M1 from "../Imge/M1.jpg"


const Carousel = () => {
    return (
        <>
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* img */}
            {/* <svg className="bd-placeholder-img" width="100%" style={{height: '500px !important'}} xmlns={"../Imge/M2.jpg"} preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777" /></svg> */}
            <img src={M1} className="bd-placeholder-img" width="100%" style={{height: '500px !important'} } preserveAspectRatio="xMidYMid slice" focusable="false" role="img" alt="..." />
            <div className="container">
              {/* <div className="carousel-caption text-left">
                <h1>Enjoy Life Tour</h1>
                <p>Lorem ipsum dolor sit amemnis nulla, sed. Impedit, ad qui.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Read more</a></p>
              </div> */}
            </div>
          </div>
          {/* <div className="carousel-item">
            {/* img */}
            {/* <svg className="bd-placeholder-img" width="100%" style={{height: '500px !important'}}  xmlns={im2} preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777" /></svg> */}
            {/* <img src={M2} className="bd-placeholder-img" width="100%" style={{height: '500px !important'}} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" alt="..." />
            <div className="container">
              <div className="carousel-caption">
                <h1>Second example heading.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam modi aliquid tempore eveniet adipisci ipsam expedita esse perferendis aperiam! Error cupiditate totam sit labore repudiandae nostrum quas saepe fuga incidunt.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Know more</a></p>
              </div>
            </div>
          </div> */} 
          {/* <div className="carousel-item">
            {/* img */}
            {/* <svg className="bd-placeholder-img" width="100%" style={{height: '500px !important'}}  xmlns={im3} preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more example...</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus cum animi alias velit nulla commodi dignissimos vel, deleniti pariatur labore reiciendis ipsum eos ea molestiae officia culpa porro quas reprehenderit..</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Go to page</a></p>
              </div>
            </div>
          </div>
         </div> 
        {/* <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a> */}
      </div>
      </div>
            {/* <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                {/* <div className="carousel-inner">
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
            </div> */} 
        </>
    );
}
export default Carousel;
// exported in {home}