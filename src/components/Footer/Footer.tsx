import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <ul className="footer_nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <p>&copy; All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;