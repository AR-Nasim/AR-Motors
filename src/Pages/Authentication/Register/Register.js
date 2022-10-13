import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        console.log(loginData.name);
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container className="my-3 pt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-7">
                    <form >
                    <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="text" className="form-control" name="name" id="floatingName" placeholder="Name"/>
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="password" className="form-control" name="password2" id="floatingPassword" placeholder="Retype Password" />
                            <label htmlFor="floatingPassword">Retype Password</label>
                        </div>
                        <button onClick={handleLoginSubmit} className="btn-custom">SignUp</button>
                    </form>
                </div>
            </div>
            <p className="mt-2">Already registered? <NavLink to="/login">Login</NavLink></p>
            <button onClick={handleGoogleSignIn} className="btn btn-success mt-4 btn-custom"><i className="fab fa-google text-warning"></i> Google Sign In</button>
        </Container>

    );
};

export default Register;