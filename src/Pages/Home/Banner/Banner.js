import React from 'react';
import Fade from 'react-reveal/Fade';

import './Banner.css';

const Banner = () => {
    return (

        <div className="banner banner1 d-flex justify-content-center align-items-center">
            <div className="p-5 m-5 banner-content-bg">
                <Fade left>
                    <h1 className="display-3 fw-bold">Wellcome to  <br />Random Health Care</h1>
                </Fade>
                <Fade right>
                    <p className="dark-text">We always provide best care of out valuable patients. <br /> We consider our patients as our family. We <br /> are always ready to take care of our family</p>
                    <button className="pink-bg px-5 py-2 border-0 rounded text-white fw-bold">About Us</button>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;