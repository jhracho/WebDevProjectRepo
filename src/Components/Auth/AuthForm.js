import React, { Fragment } from "react";

// Depending on signup boolean, certain fields will display
const AuthForm = ({ user, onChange, onSubmit, signup }) => {
    return(
        <form onSubmit={onSubmit} autoComplete="off">
            <input 
                type='text' 
                placeholder='Username' 
                onChange={onChange} 
                value={user.username}
                name='username' 
                id='usernamename-input'
            />
            {signup && (
                <Fragment>
                    <input 
                        type='text' 
                        placeholder='First Name' 
                        onChange={onChange} 
                        value={user.firstname}
                        name='firstname' 
                        id='firstname-input'
                    />
                    <input 
                        type='text' 
                        placeholder='Last Name' 
                        onChange={onChange} 
                        value={user.lastname}
                        name='lastname' 
                        id='lastname-input'
                    />
                    <input 
                        type='email' 
                        placeholder='Enter your email' 
                        onChange={onChange} 
                        value={user.email}
                        name='email' 
                        id='email-input'
                    />  
                    <input 
                        type='password' 
                        placeholder='Password (8-15 Characters)' 
                        name='password' 
                        onChange={onChange} 
                        value={user.password}
                        minLength='8' 
                        maxLength='15' 
                        id='password-input'
                    />
                    <input 
                        type='password' 
                        placeholder='Re-enter your Password' 
                        name='confirm' 
                        onChange={onChange} 
                        value={user.confirm}
                        id='confirm-password-input'
                    />
                    <input 
                        type='submit' 
                        id='submit-button' 
                        value='Create an Account'
                    />
                </Fragment> 
            )}
            {!signup && (
                <Fragment>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        name='password' 
                        onChange={onChange} 
                        value={user.password}
                        minLength='8' 
                        maxLength='15' 
                        id='password-input'
                    />
                    <input 
                        type='submit' 
                        id='submit-button' 
                        value='Log In'
                    />
                </Fragment>
            )}            
        </form>
    );
};

export default AuthForm;