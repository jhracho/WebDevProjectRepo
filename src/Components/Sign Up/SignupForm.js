import React, { useEffect, useState } from "react";
import { createUser } from "../../Services/AuthService.js";

const SignupForm = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm:""
    });

    const [add, setAdd] = useState(false);
    useEffect(() => {
      if (newUser && add) {
        createUser(newUser).then((userCreated) => {
          if (userCreated) {
            alert("You have successfully registered, " + newUser.firstname + "!");
            window.location.href = '/';
          }
        }).catch((error) => {
          console.error(error.code + ": " + error.message);
        })
      }
      setAdd(false);
    }, [newUser, add]);

    const onChange = (e) => {
      e.preventDefault();
      const { name, value: newValue } = e.target;
        
      setNewUser({
        ...newUser,
        [name]: newValue
      });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      console.log("submitted: ", e.target);
      setAdd(true);
    };

    return(
        <form onSubmit={onSubmit} autoComplete="off">
            <input type='text' placeholder='Username' onChange={onChange} name='username' id='usernamename-input'/>
            <input type='text' placeholder='First Name' onChange={onChange} name='firstname' id='firstname-input'/>
            <input type='text' placeholder='Last Name' onChange={onChange} name='lastname' id='lastname-input'/> 
            <input type='text' placeholder='Email' onChange={onChange} name='email' id='email-input'/>
            <input type='password' placeholder='Password (8-15 Characters)' name='password' onChange={onChange} minLength='8' maxLength='15' id='password-input'/>
            <input type='password' placeholder='Re-enter your Password' name='confirm' id='confirm-password-input'/>
            <input type='submit' id='submit-button' value='Create an Account'/>
        </form>
    );
};

export default SignupForm;