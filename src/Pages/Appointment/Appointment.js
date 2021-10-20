import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Appointment = () => {
    const { firebaseContext } = useAuth();
    const history = useHistory();
    const { user } = firebaseContext;
    const [countOn, setCountOn] = useState(2313);
    const [countOf, setCountOf] = useState('5432');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setCountOn(countOn + 1);
        history.push('/appointed')
    };

    return (
        <div>
            <Container>
                {/* ====================online appointment============================ */}
                <div className="d-lg-flex">
                    <div>
                        <h1 className="component-headings my-5 pb-2">We Provide Online Service 24/7</h1>
                        <p>After online application we will reach you through email for furthur processing</p>
                        <h4>Total Applied: <i className="fas fa-users"></i> {countOn}</h4>
                    </div>
                    <div>
                        {/* ================================react hook form======================= */}
                        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                            <input defaultValue={user.displayName} className="py-2 ps-2 field" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <span className="error">This field is required</span>}

                            <input defaultValue={user.email} className="py-2 ps-2 field mt-4" type="email" placeholder="@Email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}

                            <input className="py-2 ps-2 field mt-4" type="text" placeholder="Description" {...register("description", { required: true })} />
                            {errors.description && <span className="error">This field is required</span>}

                            <input className="py-2 ps-2 field mt-4" type="date" placeholder="Date" {...register("date", { required: true })} />
                            {errors.date && <span className="error">This field is required</span>}

                            <input className="secondary-btn px-5 py-2 rounded text-white fw-bold mt-4" type="submit" />
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </Container>

        </div>
    );
};

export default Appointment;