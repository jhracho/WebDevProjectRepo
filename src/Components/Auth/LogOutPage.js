import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Services/AuthService.js";

const LogOut = () => {
  // if successfully logged out, route to home page
  // otherwise, log error message
  useEffect(() => {
    logoutUser().then((loggedOut) => {
        if (loggedOut) {
            window.location.href = '/';
        }
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
      }) 
    }, []);

  return(
    <div className='login-box'>
        <h1>Logging Out!</h1>
        <br></br>
        <h4>Need to log in again? <Link to='/login'>Log In</Link>!</h4>
    </div>
  )
  };

export default LogOut;