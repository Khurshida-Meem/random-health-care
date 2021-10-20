import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../assets/images/login.jpg'
import Fade from 'react-reveal/Fade';


const SignUp = () => {
    const { firebaseContext } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, createUsingEmailPassword, error, setError, setUserName, setIsLoading } = firebaseContext;
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from?.pathname || '/home';

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // create account using email and password
    const handleRegistration = e => {
        e.preventDefault();
        // password validation
        if (password.length < 6) {
            setError('Password should be 6 charecters');
            return;
        }
        // create account
        createUsingEmailPassword(email, password)
            .then(result => {
                setUserName(name);
                history.push(redirect_url);
                window.location.reload();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <Container className="d-flex justify-content-center my-5">
            {
                !user ?
                    <div className='d-lg-flex justify-content-center align-items-center'>
                        <div>
                            <Fade left>
                                <h2 className=" pb-2 text-center">Please Sign Up</h2>

                                <form onSubmit={handleRegistration} className="form-container">
                                    {/* ========username==================== */}
                                    <div className="mb-3">
                                        <input type="text" onBlur={handleNameChange} className="my-2 field p-2" aria-describedby="user" placeholder="UserName" required />
                                    </div>

                                    {/* ================email================== */}
                                    <div className="mb-3">
                                        <input type="email" onBlur={handleEmailChange} className="my-2 field p-2" id="email" aria-describedby="emailHelp" placeholder="@Email" required />

                                    </div>

                                    {/* ===============password====================== */}
                                    <div className="mb-3">
                                        <input type="password" onBlur={handlePasswordChange} className="my-2 field p-2" id="exampleInputPassword1" placeholder="Password" required />
                                    </div>
                                    <div className="text-center error">{error}</div>
                                    <button type="submit" className="secondary-btn px-5 py-2 rounded text-white fw-bold mt-4 auth-btn"><i className="fas fa-sign-in-alt"></i> Sign Up</button>
                                </form>
                                <div className="text-center">
                                    <NavLink className="secondary-text text-center pb-5" to="/signin">Already Registered?</NavLink>
                                </div>
                            </Fade>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Fade right>
                                <img src={img} alt="" className="w-75 m-3" />
                            </Fade>
                        </div>

                    </div> :
                    <div className="main-component">
                        <Fade down>
                            <h3 className="pb-5">Wellcome to Random Health Care {user.displayName}</h3>
                        </Fade>
                    </div>
            }

        </Container>
    );
};

export default SignUp;