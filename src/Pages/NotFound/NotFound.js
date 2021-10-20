import React from 'react';
import { Container } from 'react-bootstrap';
import notfound from '../../assets/images/notFound.jpg'
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <Container>
                <div className="d-lg-flex align-items-center justify-content-evenly mt-2">
                    <div className="d-flex justify-content-center">
                        <div>
                            <h1 className="display-3 fw-bold secondary-text">404</h1>
                            <h2>Seems You are Lost</h2>
                            <p>Page not Found</p>
                            <button onClick={handleClick} className="primary-btn px-5 py-2 rounded text-white fw-bold">Go to Home</button>
                        </div>
                    </div>
                    <div >
                        <img src={notfound} alt="" className="w-100 text-center" />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default NotFound;