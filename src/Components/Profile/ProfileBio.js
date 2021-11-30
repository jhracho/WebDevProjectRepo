// component to display biographic information about an author
import React, {Fragment, useState, useEffect} from "react";
import { updateUser, updatePassword, loginUser } from "../../Services/AuthService";

const ProfileBio = (user) =>{
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [editPwdMode, setEditPwdMode] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    const onChangeUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const onChangeFirstname = (e) => {
        e.preventDefault();
        setFirstname(e.target.value);
    }

    const onChangeLastname = (e) => {
        e.preventDefault();
        setLastname(e.target.value);
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const onChangePassword2 = (e) => {
        e.preventDefault();
        setPassword2(e.target.value);
    }

    const onChangeEditPwdMode = (e) => {
        e.preventDefault();
        if (e.target.value === 'No'){
            setEditPwdMode(false);
        } else {
            setEditPwdMode(true);
        }
    }

    // executes once upon render
    useEffect(() => {
        setUsername(user.user.get("username"));
        setFirstname(user.user.get("firstname"));
        setLastname(user.user.get("lastname"));
        setEmail(user.user.get("email"));
    }, [user.user]);


    const onClickHandlerEdit = () => {
        setEditPwdMode(false);
        setEditMode(true);
    };

    const onClickHandlerSave = () => {
        updateUser(user.user.id, username, firstname, lastname, email).then((response) => {
            if (response === true) {
                // edit password if needed
                if (editPwdMode) {
                    if (password !== password2) {
                        alert("Passwords do not match!");
                    }
                    else {
                        updatePassword(user.user.id, username, password).then((response) => {
                            if (response === true) {
                                // sign user back in since session is reset
                                const credentials = {
                                    username: username,
                                    password: password
                                }
                                loginUser(credentials).then((resp) => {
                                    console.log('user signed back in successfully');
                                }).catch((e) => {
                                    console.error(e.code + ": " + e.message);
                                });
                            } else {
                                alert(response);
                            }
                        }).catch((e) => {
                            console.error(e.code + ": " + e.message);
                        });
                    }
                }
                setEditMode(false);
            } else {
                alert(response);
            }
        }).catch((e) => {
            console.error(e.code + ": " + e.message);
        });
    };

    return (
        <div className='column profile-data'>
        {
            editMode ? (
                <Fragment>
                    <div className='profile-align'>
                        <div className='profile-left'>
                            <h3>Editing Your Personal Information</h3>
                        </div>
                        <div className='profile-right'>
                            <br></br>
                            <button type='button' onClick={onClickHandlerSave} name='edit-profile-button' id='profile-button'>Save Changes</button>
                        </div>
                    </div>
                    <div className="profile-box">
                        <form>
                        <p>First Name: </p>
                            <input type='text' onChange={onChangeFirstname} name='firstname-input' maxLength='50' required='required' value={firstname}/>
                        <p>Last Name: </p>
                            <input type='text' onChange={onChangeLastname} name='lastname-input' maxLength='50' required='required' value={lastname}/>
                        <p>Username: </p>
                            <input type='text' onChange={onChangeUsername} name='username-input' maxLength='50' required='required' value={username}/>
                        <p>Email: </p>
                            <input type='email' onChange={onChangeEmail} name='email-input' maxLength='50' required='required' value={email}/>
                        <div className='profile-align'>
                            <div className='profile-left'>
                                <p>Would you like to edit your password? </p>
                            </div>
                            <div className='profile-right'>
                                <select name='edit-pwd-mode-input' required='required' onChange={onChangeEditPwdMode}>
                                    <option value='No' defaultValue>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>
                        { editPwdMode === true ? (
                            <Fragment>
                                <input type='password' placeholder='Password (8-15 Characters)' name='password' onChange={onChangePassword} value={password} minLength='8' maxLength='15' id='password-input'/>
                                <input type='password' placeholder='Re-enter your Password' name='confirm' onChange={onChangePassword2} value={password2} id='confirm-password-input'/>
                            </Fragment>
                        ) : (<></>)}
                        </form>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className='profile-align'>
                        <div className='profile-left'>
                            <h3>Personal Information</h3>
                        </div>
                        <div className='profile-right'>
                            <br></br>
                            <button type='button' onClick={onClickHandlerEdit} name='edit-profile-button' id='profile-button'>Edit Personal Information</button>
                        </div>
                    </div>
                    <p><b>First name: </b>{firstname}</p>
                    <p><b>Last name: </b>{lastname}</p>
                    <p><b>Username: </b>{username}</p>
                    <p><b>Email: </b>{email}</p>
                    </Fragment>
            )
        }
        </div>
    );
};

export default ProfileBio;