import React from 'react'
// 677
import T1 from "../Imge/T1.JPEG"
import T2 from "../Imge/T2.jpeg"
import T3 from "../Imge/T3.jpg"
import T4 from "../Imge/T4.jpg"
import T5 from "../Imge/T5.jpeg"

const TourDetail1=()=>
{
    return (
        <>
        
        <div classname="container">
        <div className="card shadow mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={T1} className="img-fluid" alt="bootcatch carousel blog" />
              </div>
              <div className="col-md-8">
                <h2>Kedarnath Tour Package</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi </p>
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
        {/* T3 */}
        <div className="card shadow mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={T3} className="img-fluid" alt="bootcatch carousel blog" />
              </div>
              <div className="col-md-8">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi porro itaque atque impedit amet obcaecati praesentium vel fugiat, eos veritatis labore, blanditiis aut a hic perferendis harum odit excepturi?</p>
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
        {/* t4*/}
        <div className="card shadow mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={T4} className="img-fluid" alt="bootcatch carousel blog" />
              </div>
              <div className="col-md-8">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi porro itaque atque impedit amet obcaecati praesentium vel fugiat, eos veritatis labore, blanditiis aut a hic perferendis harum odit excepturi?</p>
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
        {/* T5 */}
        <div className="card shadow mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={T5} className="img-fluid" alt="bootcatch carousel blog" />
              </div>
              <div className="col-md-8">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi porro itaque atque impedit amet obcaecati praesentium vel fugiat, eos veritatis labore, blanditiis aut a hic perferendis harum odit excepturi?</p>
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
      
        </>
    );
}
export default TourDetail1;