import React from 'react';
import girlImage from './images/image-1.png';
import flowersImage from './images/image-2.png';
import './Registration.scss';
import './fonts/linearicons/style.css';

function Registration() {
    return (
      <div className="wrapper">
  			<div className="inner">
  				<img src={girlImage} alt="" className="image-1"/>
  				<form action="">
  					<h3>New Account?</h3>
  					<div className="form-holder">
  						<span className="lnr lnr-user"></span>
  						<input type="text" className="form-control" placeholder="Username"/>
  					</div>
  					<div className="form-holder">
  						<span className="lnr lnr-phone-handset"></span>
  						<input type="text" className="form-control" placeholder="Phone Number"/>
  					</div>
  					<div className="form-holder">
  						<span className="lnr lnr-envelope"></span>
  						<input type="text" className="form-control" placeholder="Mail"/>
  					</div>
  					<div className="form-holder">
  						<span className="lnr lnr-lock"></span>
  						<input type="password" className="form-control" placeholder="Password"/>
  					</div>
  					<div className="form-holder">
  						<span className="lnr lnr-lock"></span>
  						<input type="password" className="form-control" placeholder="Confirm Password"/>
  					</div>
  					<button>
  						<span>Register</span>
  					</button>
  				</form>
          <figure>
  				    <img src={flowersImage} alt="" className="image-2"/>
          </figure>
  			</div>

  		</div>);
}

export default Registration;
