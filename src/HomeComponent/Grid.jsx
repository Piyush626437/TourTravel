import React from 'react'
// import ContactUs from './ContactUs';
import ContactForm from '../ContactComponent/ContactForm';

import OwnerDetail from '../ContactComponent/OwnerDetail';
const Grid = () => {
    return (
        <>

            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <div id='contactus' className="sec-title text-center mb-50 ">
                            <h1>CONTACT US</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <OwnerDetail />
                    </div>
                    <div className="col-sm">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </>
    );

}
export default Grid;

// export in {home}