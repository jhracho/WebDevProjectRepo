// navbar component displayed at top of page to link to other pages
import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { isAuthed } from "../../Services/AuthService.js";

// TODO: we should hide log in / sign up / log out pages depending on auth status - like you can only access login / sign up if you aren't logged in

const NavBar = () => {
    const authed = isAuthed();

    return (
    <div className='navbar'>
        <ul className='left'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to='/create'>Create</Link></li>
        </ul>
        <ul className='right'>
            {!authed && (
                <Fragment>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </Fragment>
            )}
            {authed && (
                <Fragment>
                    <li><Link to='/profile'>My Profile</Link></li>
                    <li><Link to='/logout'>Log Out</Link></li>
                </Fragment>
            )}
            
        </ul>
    </div>
    );
};

export default NavBar;