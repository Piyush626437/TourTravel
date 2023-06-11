import React from 'react'
import s1 from "../Imge/s1.jpg"
import s2 from "../Imge/s2.jpg"
import s3 from "../Imge/s3.jpg"



const Review=()=>
{
    return(
        <>
             <div className="container marketing col-mx-3">
        <div className="row">
          <div className="col-lg-4">
         {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */} 
            <img className="bd-placeholder-img rounded-circle" width={140} height={140} src={s1} alt="" />
            <h2 className="fw-normal">
              <font style={{verticalAlign: 'inherit'}}>
                <h3 className="mb-0">Peter Sommer</h3>
              </font>
            </h2>
            <div className="mb-1 text-muted mb-0">02 Dec 2022</div>
            <p>
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>What a wonderful experience! The two tour leaders who were archaeologists enthralled us with the history of the Islands. The food was bountiful. On the boat the meals were wholesome and delicious. We were treated to wonderful meals
                  on the the Islands that let us sample each Island's speciality. There was free time on each of the Islands that allowed for shopping, exploring or sitting round watching island life sipping a drink! The accommodation on the
                  gulet was more than adequate with rooms being serviced everyday.....</font>
              </font>
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                <font style={{verticalAlign: 'inherit'}}>
                  <font id="ReadMore" style={{verticalAlign: 'inherit' }}>Read More</font>
                </font>
              </a>
            </p>
          </div>
        
          <div className="col-lg-4">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */} 
            <img className="bd-placeholder-img rounded-circle" width={140} height={140} src={s2} alt="" />
            <h2 className="fw-normal">
              <font style={{verticalAlign: 'inherit'}}>
                <h3 className="mb-0">Liya Silver</h3>
              </font>
            </h2>
            <div className="mb-1 text-muted mb-0">28 Nov 2022</div>
            <p>
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>I booked flight through Tourist Expert for the first time and was suffering from some post booking issues which was not possible to resolve without yatra's support. In fact the air lines denied me to help and adjust my flight timing.
                  Yes, i was not able to contact anybody in your mail but i dropped E mail about my concern and got a call from the management and after getting a call, within 20 minutes my issue got resolved without paying or doing any extra
                  efforts. I very much appreciate your help.....</font>
              </font>
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                <font style={{verticalAlign: 'inherit'}}>
                  <font id="ReadMore" style={{verticalAlign: 'inherit'}}>Read More</font>
                </font>
              </a>
            </p>
          </div>
          
          <div className="col-lg-4">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */} 
            <img className="bd-placeholder-img rounded-circle" width={140} height={140} src={s3} alt="" />
            <h2 className="fw-normal">
              <font style={{verticalAlign: 'inherit'}}>
                <h3 className="mb-0">Vedika </h3>
              </font>
            </h2>
            <div className="mb-1 text-muted mb-0">12 Dec 2022</div>
            <p>
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>What a wonderful experience! The two togdfrgdxrfgdfxxgv ur leaders who were archaeologists ebfdgfdstgdfstgdstgdstnthralled us with the history of the Islands. The food was bountiful. On the boat the meals were wholesome and delicious. We were treated to wonderful meals
                  on the the Islands that let us snd's speciality. There was free time n each of the Islands that allowed for shopping, exploring or sitting round watching island life sipping a drink!.....</font>
              </font>
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                <font style={{verticalAlign: 'inherit'}}>
                  <font id="ReadMore" style={{verticalAlign: 'inherit'}}>Read More</font>
                </font>
              </a>
            </p>
          </div>
         
        </div>
      </div>

        
        </>
    );
}
export default Review;