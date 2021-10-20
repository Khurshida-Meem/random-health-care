import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Appointed = () => {
    return (
        <Container>
            <div className="mt-5 main-component d-flex justify-content-center">
                <Fade down>
                    <div>
                        <h3>We Got You. We will reach you very soon. <strong>Please Keep Checking Your Email</strong> <br />Thank You</h3>
                        <h4>If you are having a trouble Contact us</h4>
                        <h5><i className="fas secondary-text fa-phone"></i>  +88017453</h5>
                        <h5><i className="far secondary-text fa-envelope"></i>  random@emergency.com</h5>
                    </div>
                </Fade>
            </div>
        </Container>

    );
};

export default Appointed;