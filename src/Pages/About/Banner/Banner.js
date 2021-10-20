import React from 'react';
import './Banner.css'
import Zoom from 'react-reveal/Zoom';

const Banner = () => {
    return (
        <div className="about-banner d-flex align-items-center justify-content-center">
            <h1 className="fw-bold display-3 p-secondary p-3">
                <Zoom left cascade>
                    We Always Care for You
                </Zoom>
            </h1>
        </div>
    );
};

export default Banner;