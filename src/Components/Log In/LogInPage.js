import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LogIn = () => {
    return(
      <div class='login-box'>
          <h1>Welcome back!</h1>
          <LoginForm />
          <h4>Need an account? <Link to='/signup'>Sign Up</Link>!</h4>
      </div>
    )
  };

export default LogIn;