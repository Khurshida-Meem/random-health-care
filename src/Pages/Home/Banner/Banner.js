import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router';

import './Banner.css';

const Banner = () => {

    const history = useHistory()
    const handleClick = () => {
        history.push('/about')
    }

    return (

        <div className="banner banner1 d-flex justify-content-center align-items-center">
            <div className="p-5 m-3 banner-content-bg">
                <div className="p-3 banner-content-bg">
                    <Fade left>
                        <h1 className="display-4 fw-bold text-white">Wellcome to  <br />Random Health Care</h1>
                    </Fade>
                    <Fade right>
                        <p className="dark-text text-white">We always provide best care of out valuable patients. <br /> We consider our patients as our family. We <br /> are always ready to take care of our family</p>
                        <button onClick={handleClick} className="primary-btn px-5 py-2 rounded text-white fw-bold">About Us <i className="fas fa-arrow-right"></i></button>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default Banner;