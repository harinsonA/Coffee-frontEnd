import React from 'react';

const Slider = () =>{
    return(
        <div className="slider-item" data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="">
            <div className="slider-text d-flex justify-content-center align-items-center">
              <div className="col-md-12  text-center">
                <h1 className="mb-3 mt-5 bread">Our Menu</h1>
                <p className="breadcrumbs">
                  <span className="mr-2 slider-title">
                    <a href="#" className="slider-home">
                      Home
                    </a>
                  </span>
                  <span>Menu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Slider;