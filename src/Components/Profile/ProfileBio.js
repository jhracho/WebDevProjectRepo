// component to display biographic information about an author
import React, {Fragment, useState} from "react";

const ProfileBio = (user) =>{
    const [editMode, setEditMode] = useState(false);

    const onClickHandlerEdit = () => {
        setEditMode(true);
    };

    const onClickHandlerSave = () => {
        setEditMode(false);
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
                    <br></br>
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
                    <p><b>First name: </b>{user.user.get("firstname")}</p>
                    <p><b>Last name: </b>{user.user.get("lastname")}</p>
                    <p><b>Username: </b>{user.user.get("username")}</p>
                    </Fragment>
            )
        }
            </div>
    );
};

export default ProfileBio;