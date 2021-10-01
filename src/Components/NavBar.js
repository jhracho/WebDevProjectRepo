// navbar component displayed at top of page to link to other pages
// NOTE: links will be changed as more pages are converted to js instead of static html
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function NavBar() {
    return html`
    <div class='navbar'>
        <ul class='left'>
            <li class="active">Home</li>
            <li><a href='../../Feature 2/about.html'>About</a></li>
            <li><a href='../../Feature 2/post/explore.html'>Explore</a></li>
            <li><a href='../../Feature 2/post/create.html'>Post</a></li>
        </ul>
        <ul class='right'>
            <li><a href='../../Feature 2/login/login.html'>Log In</a></li>
            <li><a href='../../Feature 2/signup/signup.html'>Sign Up</a></li>
            <li>Log Out</li>
        </ul>
    </div>
    <br/>
    `;
}