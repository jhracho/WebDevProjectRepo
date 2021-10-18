import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

const SignUp = () => {
    return(
      <div class='signup-box'>
        <h1>Create an Account</h1>
        <SignupForm />
        <h4>Already have an account? <Link to="/login">Log In</Link>!</h4>
      </div>
    )
  };

export default SignUp;