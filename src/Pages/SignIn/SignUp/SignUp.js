import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../assets/images/login.jpg'

const SignUp = () => {
    const history = useHistory();
    const { firebaseContext } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, createUsingEmailPassword, error, setError } = firebaseContext;

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 charecters');
            return;
        }
        createUsingEmailPassword(name, email, password);

    }

    return (
        <Container className="d-flex justify-content-center my-5">
            {
                !user ?
                    <div className='d-lg-flex justify-content-center align-items-center'>
                        <div>
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
                                <button type="submit" className="secondary-btn px-5 py-2 rounded text-white fw-bold mt-4 auth-btn">Sign Up</button>
                            </form>
                            <div className="text-center">
                                <NavLink className="secondary-text text-center pb-5" to="/signin">Already Registered?</NavLink>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={img} alt="" className="w-75 m-3" />
                        </div>

                    </div> :
                    <div className="main-component">
                        <h3 className="pb-5">Wellcome to Random Health Care {user.displayName}</h3>
                    </div>
            }

        </Container>
    );
};

export default SignUp;