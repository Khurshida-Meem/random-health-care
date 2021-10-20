import React from 'react';
import { Container } from 'react-bootstrap';
import Details from '../Details/Details';
import doctor1 from '../../../assets/images/doctor-1.jpg';
import doctor2 from '../../../assets/images/doctor-2.jpg';
import doctor3 from '../../../assets/images/doctor-3.jpg';
import doctor4 from '../../../assets/images/doctor-4.jpg';
import doctor5 from '../../../assets/images/doctor-5.jpg';
import doctor6 from '../../../assets/images/doctor-6.jpg';

const About = () => {
    return (
        <div>
            <Container>
                <div className>
                    <h2 className="my-5">Learn More about us</h2>
                    <Details></Details>
                </div>
                <div>
                    <h2 className="mt-5 mb-3">Meet our Doctors</h2>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor1} alt="" height="200px" width="300px" />
                                <h5>Dr. Spring</h5>
                                <small>spring@random.care</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor2} alt="" height="200px" width="300px" />
                                <h5>Dr. Summer</h5>
                                <small>summer@random.care</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor3} alt="" height="200px" width="300px" />
                                <h5>Dr. Winter</h5>
                                <small>winter@random.care</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor4} alt="" height="200px" width="300px" />
                                <h5>Dr. Monsoon</h5>
                                <small>monsoon@random.care</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor5} alt="" height="200px" width="300px" />
                                <h5>Dr. January</h5>
                                <small>january@random.care</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div>
                                <img src={doctor6} alt="" height="200px" width="300px" />
                                <h5>Dr. February</h5>
                                <small>february@random.care</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;