import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

// <h4>Already have an account? <Link to="/login">Log In</Link>!</h4>

const SignUp = () => {
    return(
      <div className='signup-box'>
        <h1>Create an Account</h1>
        <SignupForm/>
       
      </div>
    )
  };

export default SignUp;