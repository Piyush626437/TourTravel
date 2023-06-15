import React from 'react'


// import ServiceTag from '../Imge/ServiceTag';
import ServiceTag from '../HomeComponent/ServiceTag';

import Grid from '../HomeComponent/Grid';
import Carousel from '../HomeComponent/Carousel';
import Footer from '../HomeComponent/Footer';
import KedarnathTag from '../HomeComponent/KedarnathTag';
import Review from '../HomeComponent/Review';

const Home = () => {
    return (
        <>
            <Carousel />
           
                <ServiceTag />
                <KedarnathTag />
                <Grid />
                
                {/* <Review/> */}
               
                <Footer />


          
        </>
    );
}
export default Home;