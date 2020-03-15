import React from 'react';
import photo from './signin-image.jpg';
import './Login.scss';

function Login() {
    return (
     <div className="container">
        <div className="signin-content row">
            <div className="signin-form col-md-6 col-xs-12">
                <h2 className="form-title">Login</h2>
                <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                        <label className="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" id="your_name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <label className="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" id="your_pass" placeholder="Password"/>
                    </div>
                    <div className="form-group  remmeber">
                        <input type="checkbox" id="remember-me" className="agree-term" />
                        <label className="label-agree-term">Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" id="signin" className="form-submit" value="Log in"/>
                    </div>
                </form>
                <div className="social-login">
                    <span className="social-label">Or login with</span>
                    <ul className="socials">
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
                <span className="login-label">Not a member?</span><a href="#" className="signin-image-link">Sign Up</a>
            </div>
            <div className="signin-image col-md-6 col-xs-12">
                <figure><img src={photo} alt="sing in image"/></figure>
            </div>
        </div>
    </div>);
}

export default Login;
