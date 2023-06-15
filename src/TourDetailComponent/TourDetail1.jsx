import React from 'react'
// 677
import T1 from "../Imge/T1.JPEG"
import T2 from "../Imge/T2.jpeg"
import T3 from "../Imge/T3.jpg"
import T4 from "../Imge/T4.jpg"
import T5 from "../Imge/T5.jpeg"
import T6 from "../Imge/T6.jpg"

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
                <p>Kedarnath is one of the most popular pilgrimage destinations in India, and for good reason. The temple, dedicated to Lord Shiva, is located in the Garhwal Himalayas at an altitude of 11,750 feet. The journey to Kedarnath is an arduous one, but the rewards are well worth it.</p>
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
                <h2>Badrinath Tour Package</h2>
                <p>Badrinath is one of the most popular pilgrimage destinations in India. It is located in the Garhwal Himalayas, at an altitude of 10,300 feet. The town is home to the Badrinath Temple, which is one of the 12 Jyotirlingas, or sacred shrines of Shiva.</p>
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
                <img src={T6} className="img-fluid" alt="bootcatch carousel blog" />
              </div>
              <div className="col-md-8">
                <h2>Tungnath Tour Package</h2>
                <p>Tungnath is one of the Panch Kedar temples, located at an altitude of 12,075 feet above sea level in the Garhwal Himalayas. It is the highest Shiva temple in India and is a popular destination for pilgrims and trekkers alike</p>
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