// navbar component displayed at top of page to link to other pages
// NOTE: links will be changed as more pages are converted to js instead of static html
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div class='navbar'>
        <ul class='left'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to='/explore'>Explore</Link></li>
            <li><Link to='/create'>Post</Link></li>
        </ul>
        <ul class='right'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li>Log Out</li>
        </ul>
    </div>
    );
};

export default NavBar;