import React from "react";

const SignupForm = () => {
    return(
        <form action='create-account-script'>
            <input type='text' placeholder='First Name' id='firstname-input'/>
            <input type='text' placeholder='Last Name' id='lastname-input'/> 
            <input type='text' placeholder='Email' id='email-input'/>
            <input type='password' placeholder='Password (8-15 Characters)' minlength='8' maxlength='15' id='password-input'/>
            <input type='password' placeholder='Re-enter your Password' id='confirm-password-input'/>
            <input type='submit' id='submit-button' value='Create an Account'/>
            <input type='reset' value='Clear Form'/>
        </form>
    );
};

export default SignupForm;