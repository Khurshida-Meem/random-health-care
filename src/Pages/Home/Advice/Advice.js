import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import doctor1 from '../../../assets/images/doctor-1.jpg'
import doctor2 from '../../../assets/images/doctor-2.jpg'
import doctor3 from '../../../assets/images/doctor-3.jpg'

const Advice = () => {
    return (
        <div className="my-5">
            {/* ======================= advice Container=============================== */}
            <Container className="d-lg-flex align-items-center justify-content-between">
                <div>
                    <h2 className=" component-headings pb-3">Our Doctors Says</h2>
                    <div className="d-lg-flex align-items-center justify-content-center my-3">
                        <Fade left>
                            <div className="m-2">
                                <img src={doctor1} alt="" />
                            </div>
                            <div className="ms-2">
                                <h4>Be Lively</h4>
                                <p className="w-75">Doctors tend to treat themselves far too often. We need an impartial person to catch things we are not looking for ourselves. If something feels a little 'off,' get it checked out. You should also make time for adequate sleep. Sleep improves memory, mood,</p>
                            </div>
                        </Fade>

                    </div>
                    <div className="d-lg-flex align-items-center justify-content-center">
                        <Fade left>
                            <div className="m-2">
                                <img src={doctor2} alt="" />
                            </div>
                            <div className="ms-3">
                                <h4>Be Active</h4>
                                <p className="w-75">
                                    Listen to their concerns and then reflect back what they've shared with you. I usually phrase the reflective listening like, 'Okay Mrs. Smith, I hear you are saying you've been experiencing X and you are concerned because Y.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="dark-bg m-3 w-75 mt-5">
                    <Fade right>
                        <img src={doctor3} alt="" className="w-50 p-3" />
                        <p className="p-3 p-secondary">
                            A hospital is a health care institution providing patient treatment with specialized
                            medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital,
                            which typically has an emergency department to treat urgent health problems ranging from fire and accident
                            victims to a sudden illness. A district hospital typically is the major health
                            care facility in its region
                        </p>
                    </Fade>

                </div>
            </Container>

        </div>
    );
};

export default Advice;