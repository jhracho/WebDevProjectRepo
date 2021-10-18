import React from "react";

const LoginForm = () => {
    return(
        <form action='authentication-script'>
            <input type='text' placeholder='Username' id='username-input'/>
            <input type='password' placeholder='Password' id='password-input'/>
            <input type='submit' id='submit-button' value='Log In'/>
        </form> 
    );
};

export default LoginForm;