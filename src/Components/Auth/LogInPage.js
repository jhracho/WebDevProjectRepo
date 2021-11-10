import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/AuthService.js";
import AuthForm from "./AuthForm";

const LogIn = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (creds && login) {
      loginUser(creds).then((authedUser) => {
        if (authedUser) {
          // Redirect User to home page after log in
          window.location.href = '/';
        }
      }).catch((error) => {
        console.error(error.code + ": " + error.message);
      }) 
    }
    setLogin(false);
  }, [creds, login]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setCreds({
      ...creds,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return(
    <div class='login-box'>
        <h1>Welcome back!</h1>
        <AuthForm
          signup={false}
          user={creds}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
        <h4>Need an account? <Link to='/signup'>Sign Up</Link>!</h4>
    </div>
  )
  };

export default LogIn;