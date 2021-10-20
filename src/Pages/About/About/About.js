import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import doctor1 from '../../../assets/images/doctor-1.jpg';
import doctor2 from '../../../assets/images/doctor-2.jpg';
import doctor3 from '../../../assets/images/doctor-3.jpg';
import doctor4 from '../../../assets/images/doctor-4.jpg';
import doctor5 from '../../../assets/images/doctor-5.jpg';
import doctor6 from '../../../assets/images/doctor-6.jpg';
import Banner from '../Banner/Banner';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <div>
                    <Fade left>
                        <div className="text-center">
                            <h4 className="mt-5 component-headings pb-3">We Are Here For You</h4>
                            <h2 className="mb-3 pb-2">Our Values</h2>
                        </div>
                    </Fade>
                    <div>
                        {/* ============== 1st row=================== */}
                        <div className="d-lg-flex align-items-center justify-content-evenly">
                            <Fade left>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-user-md"></i> doctor you Choose</h3>
                                </div>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-procedures"></i> Your Health Care</h3>
                                </div>
                            </Fade>
                        </div>
                        {/* ========================2nd row ========================== */}
                        <div className="d-lg-flex align-items-center justify-content-evenly my-3">
                            <Fade>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-hand-holding-medical"></i> Always There for You</h3>
                                </div>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-user-nurse"></i> Nursing Staff</h3>
                                </div>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-ambulance"></i> Emergency Services</h3>
                                </div>
                            </Fade>
                        </div>
                        {/* ========================3rd row ========================== */}
                        <div className="d-lg-flex align-items-center justify-content-evenly my-3">
                            <Fade right>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="far fa-hospital"></i> Premium Facilities</h3>
                                </div>
                                <div>
                                    <h3 className="light-bg p-3 text-white"><i className="fas fa-air-freshener"></i> Freash Environment</h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div>
                    {/* ================ Doctors ======================== */}
                    <h2 className="mt-5 mb-3 ms-2">Meet our Doctors</h2>
                    <div className="row g-3 ms-2">
                        <Rotate bottom left>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor1} alt="" height="200px" width="300px" />
                                    <h5>Dr.Spring</h5>
                                    <small>spring @random.care</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor2} alt="" height="200px" width="300px" />
                                    <h5>Dr.Summer</h5>
                                    <small>summer @random.care</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor3} alt="" height="200px" width="300px" />
                                    <h5>Dr.Winter</h5>
                                    <small>winter @random.care</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor4} alt="" height="200px" width="300px" />
                                    <h5>Dr.Monsoon</h5>
                                    <small>monsoon @random.care</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor5} alt="" height="200px" width="300px" />
                                    <h5>Dr.January</h5>
                                    <small>january @random.care</small>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div>
                                    <img src={doctor6} alt="" height="200px" width="300px" />
                                    <h5>Dr.February</h5>
                                    <small>february @random.care</small>
                                </div>
                            </div>
                        </Rotate>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;