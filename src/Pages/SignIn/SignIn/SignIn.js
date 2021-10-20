import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignIn.css'
import img from '../../../assets/images/login.jpg'
import Fade from 'react-reveal/Fade';


const SignIn = () => {
    const { firebaseContext } = useAuth();

    // redirect to home page or the page came from
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from?.pathname || '/home';

    const { user, signInUsingGoogle, signInUsingEmailandPass, error, setIsLoading, setError } = firebaseContext;
    const { register, handleSubmit, formState: { errors } } = useForm();

    // handle email and password sign in
    const onSubmit = data => {
        signInUsingEmailandPass(data.email, data.password)
            .then(() => {
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // handle google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <Container className="d-flex justify-content-center my-5">
            {
                !user ?
                    <div className='d-lg-flex justify-content-center align-items-center'>
                        <div>
                            <Fade right>
                                <h2 className=" pb-2 text-center">Please Sign In</h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                                    <input className="py-2 ps-2 field" type="email" placeholder="Email" {...register("email", { required: true })} />
                                    {errors.email && <span className="error">This field is required</span>}
                                    <input className="py-2 ps-2 field mt-4" type="password" placeholder="Password" {...register("password", { required: true })} />
                                    {errors.password && <span className="error">This field is required</span>}
                                    {<span className="error">{error}</span>}
                                    <button type="submit" className="secondary-btn px-5 py-2 rounded text-white fw-bold mt-4 auth-btn"><i className="fas fa-sign-in-alt"></i> Sign In</button>
                                </form>
                                {/* ===========google login=============== */}
                                <div className="text-center">
                                    <button className="primary-btn provider-btn py-2 rounded text-white fw-bold mb-3" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Sign In Using Google</button>
                                    <br />
                                    <NavLink className="secondary-text text-center pb-5" to="/signup">New to Random Health Care?</NavLink>
                                </div>
                            </Fade>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Fade left>
                                <img src={img} alt="" className="w-75" />
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

export default SignIn;