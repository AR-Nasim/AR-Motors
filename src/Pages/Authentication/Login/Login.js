import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container className="my-3 pt-5">
            <h1 className="title">Login</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-7">
                    <form >
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnChange} type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnChange} type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button onClick={handleLoginSubmit} className="btn-custom">Login</button>
                    </form>
                </div>
            </div>
            <p className="mt-2">New User? <NavLink to="/register">Register</NavLink></p>
            <button onClick={handleGoogleSignIn} className="btn btn-success mt-4 btn-custom"><i className="fab fa-google text-warning"></i> Google Sign In</button>
        </Container>
    );
};

export default Login;