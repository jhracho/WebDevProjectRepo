import React, { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { createUser } from "../../Services/AuthService.js";
import { createAuthorOnSignUp } from "../../Services/AuthorService";
import { Link } from "react-router-dom";

// <h4>Already have an account? <Link to="/login">Log In</Link>!</h4>

const SignUp = () => {
  const [user, setNewUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm:""
  });

  const [add, setAdd] = useState(false);
  useEffect(() => {
    if (user && add) {
      createUser(user).then((userCreated) => {
        if (userCreated) {
          alert("You have successfully registered, " + user.firstname + "!");

          var displayname = user.firstname + ' ' + user.lastname;
          var firstname = user.firstname;
          var lastname = user.lastname;
          var userPtr = userCreated.toPointer();
          
          createAuthorOnSignUp(displayname, firstname, lastname, userPtr);

          // Redirect user to home page after first sign up
          window.location.href = '/';
        }
      }).catch((error) => {
        console.error(error.code + ": " + error.message);
      }) 
    }
    setAdd(false);
  }, [user, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setNewUser({
      ...user,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  return(
      <div className='signup-box'>
        <h1>Create an Account</h1>
        <AuthForm
          signup={true}
          user={user}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
        <br></br>
        <br></br>
        <h4>Already have an account? <Link to="/login">Log In</Link>!</h4>
      </div>
    )
  };

export default SignUp;