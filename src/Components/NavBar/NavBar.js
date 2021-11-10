// navbar component displayed at top of page to link to other pages
import React from "react";
import { Link } from "react-router-dom";

// TODO: we should hide log in / sign up / log out pages depending on auth status - like you can only access login / sign up if you aren't logged in

const NavBar = () => {
    return (
    <div className='navbar'>
        <ul className='left'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to='/explore'>Explore</Link></li>
            <li><Link to='/create'>Post</Link></li>
        </ul>
        <ul className='right'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
        </ul>
    </div>
    );
};

export default NavBar;