import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Nav = () => {
    const user = <FontAwesomeIcon icon={faUser} />;
    return (
        <>
            <div className='navBar sticky'>
                <p className="Privet">Open TV</p>
                <div className="title">      
                    <Link to="/" className="title-apple title-hover">Apple TV+</Link>
                    <p>MLS Season Pass</p>
                </div>
                <div>
                    <input  type="text" placeholder="Search" />
                    <a href="/login">{user}</a>
                </div>
            </div>
        </>
    )
};

export default Nav;