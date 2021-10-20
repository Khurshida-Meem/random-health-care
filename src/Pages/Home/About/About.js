import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className='about-container mb-5'>

            <Container className="d-lg-flex justify-content-center align-items-center">
                <div className="me-4 mt-3">
                    <Fade right>
                        <div>
                            <h2 className=" component-headings pb-3">About Us</h2>
                            <h2 className=" pb-2">Who We Are</h2>
                        </div>
                        <div>
                            <p className="pe">A hospital is a health care institution providing patient treatment with specialized <br /> medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, <br /> which typically has an emergency department to treat urgent health problems ranging from fire and accident <br /> victims to a sudden illness. A district hospital typically is the major health <br /> care facility in its region, with many beds for intensive care and additional beds for patients who need <br /> long-term care. Specialized hospitals include trauma centers.</p>
                        </div>
                    </Fade>
                </div>
                <div>
                    {/* ======================== Schedule ============================ */}
                    <div className=" m-3">
                        <Fade left>
                            <h2 className="   component-headings pb-3">Our Working Hour</h2>
                            <table className="table banner-content-bg p-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9:00am - 7:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>2:00pm - 9:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10:00am - 8:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10:00am - 8:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>ThursDay</td>
                                        <td>8:00am - 2:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>11:00am - 5:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>11:00am - 7:00pm</td>
                                    </tr>

                                </tbody>
                            </table>
                        </Fade>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;