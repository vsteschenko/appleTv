import React from 'react';
import './../styles/Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    const apple = <FontAwesomeIcon icon={faApple} />;
    return (
        <>
            <div className="LoginDiv">
                <div className="LogoLogin">{apple}</div>
                <h1>Sign In or Sign Up</h1>
                <p>Enter your email to get started.</p>
                <form className="Login">
                    <input className="Email" type="text" placeholder="Email or Username" />
                    <input className="Email" type="password" placeholder="Password" />
                    <Link to="/"><button className="ButtonLogin" type="submit">Login</button></Link>
                </form>
            </div>
        </>
    )
};
export default Login;