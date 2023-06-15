import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import { useState } from 'react';
const ContactForm=()=>
{
  const [data,setData]=useState({name:"",to:"",from:"",email:"",mobile:"",query:""});
  const handleChange=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
   setData({...data,[name]:value});
  }

 
  const handleSubmit=(e)=>
  {
   
    e.preventDefault();
    


  }
  let ans=()=>{"https://wa.me/916264371230?text=Hello%20Everyone"}
    return(
       <>
		<div className="contains" >
		<div className="cn c10 f20 fw-500">
				<img src="https://tcsg.in/assets/images/homecards/places_new.png" /><br/>
				Where do you want to go?
			</div>
			<div className="mainform needs-validation" method="post" onSubmit={handleSubmit}>
				{/* first input/ */}
				<div className="container my-4">
        {/* <h2>Contact Us</h2> */}
		<label htmlFor="validationTooltip01" className="form-label">Name</label>
    <input type="text" name="name" className="form-control" id="validationTooltip01" placeholder='Enter Your Name'  onChange={handleChange} value={data.name} required/>
    <div className="valid-tooltip">
      Looks good!
    </div>
    <div className="mt1">
    <label htmlFor="exampleDataList" className="form-label">To</label>
    <div  className="input-icon-box">
<input className="form-control" list="datalistOptions" id="exampleDataList" name ="to"placeholder="Search Destination"  onChange={handleChange}   value={data.to} />
<i className="fa fa-map-marker iconb f17 c10" aria-hidden="true"></i>
</div>
</div>

<datalist id="datalistOptions">
  <option value="Kedarnath"/>
  <option value="Badrinath"/>
  <option value="Bhopal,MadhyaPradesh"/>
  <option value="Indore"/>
  <option value="Narmadapuram"/>
</datalist>
<div className="mt1">
    <label htmlFor="exampleDataList" className="form-label">From</label>
    <div  className="input-icon-box">
<input className="form-control" list="datalistOptions"  id="exampleDataList" name ="from" placeholder="Search Destination"  onChange={handleChange}  value={data.from} />
<i className="fa fa-map-marker iconb f17 c10" aria-hidden="true"></i>
</div>
</div>
<datalist id="datalistOptions">
  <option value="Kedarnath"/>
  <option value="Badrinath"/>
  <option value="Bhopal,MadhyaPradesh"/>
  <option value="Indore"/>
  <option value="Narmadapuram"/>
</datalist>
    {/* <div className="valid-feedback"> */}
    
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" name ="email"  id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange}   value={data.email}/>
        </div>
        
        <div className="input-group mb-3 my-3">
          <span className="input-group-text" id="inputGroup-sizing-default" >Mobile</span>
          <input type="text" placeholder='Enter Your Number' name ="mobile" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  onChange={handleChange}  value={data.mobile}  />
        </div>
       
      
      
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Ask Your Query</label>
          <textarea className="form-control"   id="exampleFormControlTextarea1" name ="query" rows={3} defaultValue={""} onChange={handleChange}  value={data.query} />
        </div>
        
        <button  className="btn btn-danger" onSubmit={handleSubmit} data-bs-toggle="modal"  data-bs-target="#SubmitModal"><a id='submitbutton' href={`https://wa.me/918815998314?text=Name-%20${data.name}%0aTo-%20${data.to}%0aFrom-%20${data.from}%0aMobile-%20${data.mobile}%0aEmail-%20${data.email}%0aQuery-%20${data.query}`} target='_blank'>Submit</a></button>
       
        {/* login Modal */}
        <div className="modal fade" id="SubmitModal" tabIndex={-1} aria-labelledby="SubmitModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="SubmitModalLabel">Your Detail Has Been Submitted</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  />
              </div>
              <form action>
                
                <p className="modal-title fs-7 mb-2 mx-3"> Our Team will Contact you soon..</p>
              </form>
              {/* <p className="modal-title fs-7"> Our Team will Contact you soon..</p> */}
            </div>
          </div>
        </div>
      </div>
			</div>
		</div>
    
		
       </>
    );
}
export default ContactForm;
//exported in => {contact,grid(homecom.)}