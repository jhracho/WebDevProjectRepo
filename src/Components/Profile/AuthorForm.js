// component with form to create a new author
import React, { useState } from "react";
import { getCurrentUser } from "../../Services/AuthService";
import { createAuthor } from "../../Services/AuthorService";

const AuthorForm = () => {
    const [author, setAuthor] = useState({
        displayname: "",
        firstname: "",
        lastname: "",
        bio: ""
      });
    
    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setAuthor({
            ...author,
            [name]: newValue
        });
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userPtr = getCurrentUser().toPointer();
        console.log('author is ', author);
        createAuthor(author.displayname, author.firstname, author.lastname, author.bio, userPtr).then((response) => {
            if (response){
                alert('New author ' + author.displayname + ' successfully created!');
                window.location.reload();
            }
        });
    };

    return (
        <div className='column profile-data'>
            <div className='profile-align'>
                <div className='profile-left'>
                    <h3>Create New Author</h3>
                </div>
                <div className='profile-right'>
                    <br></br>
                    <button type='button' onClick={onSubmitHandler} name='edit-profile-button' id='profile-button'>Create Author</button>
                </div>
            </div>
            <div className="profile-box">
                <form>
                <p>Display Name: </p>
                    <input type='text' onChange={onChangeHandler} name='displayname' maxLength='50' required='required'/>
                <p>First Name: </p>
                    <input type='text' onChange={onChangeHandler} name='firstname' maxLength='50' required='required'/>
                <p>Last Name: </p>
                    <input type='text' onChange={onChangeHandler} name='lastname' maxLength='50' required='required'/>
                <p>Bio: </p>
                    <textarea name='bio' onChange={onChangeHandler} columns='100' rows='4' required='required'></textarea>
                </form>
            </div>
    </div>
    );
}

export default AuthorForm;