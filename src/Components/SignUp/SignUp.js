import React from 'react';
import './SignUp.css';

import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {
    return (
        <div className='form-container sign-up-container'>
            <form action="#">
                <h1>Sign Up</h1>
                <div className="social-container">
                    <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG}/></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;