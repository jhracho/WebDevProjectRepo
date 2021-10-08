// navbar component displayed at top of page to link to other pages
// NOTE: links will be changed as more pages are converted to js instead of static html
import React from "react";

const NavBar = () => {
    return (
    <div class='navbar'>
        <ul class='left'>
            <li class="active">Home</li>
            <li><a href='#'>About</a></li>
            <li><a href=''>Explore</a></li>
            <li><a href=''>Post</a></li>
        </ul>
        <ul class='right'>
            <li><a href='#'>Log In</a></li>
            <li><a href='#'>Sign Up</a></li>
            <li>Log Out</li>
        </ul>
    </div>
    );
};

export default NavBar;