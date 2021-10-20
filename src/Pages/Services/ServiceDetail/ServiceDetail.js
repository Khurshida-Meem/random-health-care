import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import useDatabase from '../../../hooks/useDatabase';
import Rating from 'react-rating';
import Fade from 'react-reveal/Fade';

const ServiceDetail = () => {
    const history = useHistory()
    const { serviceId } = useParams();
    const services = useDatabase(`https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Random-hospital/${serviceId}`);

    console.log(services);
    const { description, name, rating, shortline, thumb, treated } = services;
    const handleButtonClick = () => {
        history.push('/appointment')
    }
    return (
        <div className="main-component mt-5">
            <Container>
                <div className="d-lg-flex align-items-center">
                    <div className="mt-3">
                        <Fade>
                            <img src={thumb} alt="" />
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly ></Rating>

                            <p><i className="fas fa-users secondary-text"></i> {treated}</p>
                        </Fade>
                    </div>
                    <div className="mx-3">
                        <Fade right>
                            <h1 className="pb-2">{name}</h1>
                            <h4 className="mt-2">{shortline}</h4>
                            <p>
                                {description}
                            </p>
                            <button onClick={handleButtonClick} className="primary-btn px-4 py-3 text-white rounded fw-bold"><i className="fas fa-calendar-check"></i> Make an Appoinment</button>
                        </Fade>
                    </div>
                </div>
                <div>
                    <Fade up>
                        <h1 className="mt-5">We are Available</h1>
                        <div>
                            <table className="table banner-content-bg p-5 w-50">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9: 00am - 7: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>2: 00pm - 9: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10: 00am - 8: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10: 00am - 8: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>ThursDay</td>
                                        <td>8: 00am - 2: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>11: 00am - 5: 00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>11: 00am - 7: 00pm</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </Fade>
                </div>

            </Container>
        </div>
    );
};

export default ServiceDetail;