import React from 'react'
import TourDetail1 from './TourDetail1';

const GridTour=()=>
{
    return(
        <>
          <div className="row">
                    <div className="col-sm">
                  <TourDetail1/>
                
                    <TourDetail1/>
                    </div>

                </div>
        </>
    );
}
export default GridTour;