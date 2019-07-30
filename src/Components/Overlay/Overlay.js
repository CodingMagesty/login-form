import React from 'react';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        const { toggleOverlay } = this.props;

        return (
            <div className='overlay-container'>
                <div className='overlay'>
                    <div className='overlay-panel panel-left'>
                        <h1>
                            Welcome Back!
                        </h1>
                        <p>
                            To keep connected with us please login with your personal info
                        </p>
                        <button className='ghost' id='signIn' onClick={() => toggleOverlay()}>
                            Sign in
                        </button>
                    </div>
                    <div className='overlay-panel panel-right'>
                        <h1>
                            Hello Friend!
                        </h1>
                        <p>
                            Enter your personal details and start journey with us
                        </p>
                        <button className='ghost' id='signUp' onClick={() => toggleOverlay()}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Overlay;