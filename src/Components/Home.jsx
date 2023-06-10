import React from 'react'


// import ServiceTag from '../Imge/ServiceTag';
import ServiceTag from '../HomeComponent/ServiceTag';

import Grid from '../HomeComponent/Grid';
import Carousel from '../HomeComponent/Carousel';
import Footer from '../HomeComponent/Footer';
import KedarnathTag from '../HomeComponent/KedarnathTag';

const Home = () => {
    return (
        <>
            <Carousel />
           
                <ServiceTag />
                <KedarnathTag />
                <Grid />
                <Footer />
          
        </>
    );
}
export default Home;