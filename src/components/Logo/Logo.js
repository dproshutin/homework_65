import React from 'react';
import logo from '../../assets/images/logo.png';
import './Logo.css';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="Logo">
            <img src={logo} alt="Ask"/>
        </Link>
    );
};

export default Logo;