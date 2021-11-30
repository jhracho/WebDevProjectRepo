// toplevel profile page to display profile information and allow for editing of user information
import React, {Fragment, useState, useEffect} from "react";
import { getCurrentUser } from "../../Services/AuthService";
import ProfileHeader from "./ProfileHeader";
import ProfileAuthor from "./ProfileAuthor";
import ProfileBio from "./ProfileBio";
import AuthorForm from "./AuthorForm";
import { getAuthorsForUser } from "../../Services/AuthorService";

const ProfilePage = () => {
    
    const [user, setUser] = useState();
    const [userSet, setUserSet] = useState(false);

    const [authors, setAuthors ] = useState([]);
    // pull in authors for user once
    useEffect(() => {
        getAuthorsForUser().then((response) => {
            setAuthors(response);
        })
    }, []);
    
    // executes once, store current user object
    useEffect(() => {
            setUser(getCurrentUser());
            setUserSet(true);
    }, []);

    return (
        <Fragment>
        { userSet ? (
            <Fragment>
                <div className='background-body'>
                    <div className='profile-parent'>
                        <ProfileHeader></ProfileHeader>
                        <ProfileBio user={user}></ProfileBio>
                        <Fragment>
                        {authors.map(
                            (author) => (
                                <ProfileAuthor key={author.id} author={author}></ProfileAuthor>
                        ))}
                        </Fragment>
                        <AuthorForm></AuthorForm>
                    </div> 
                </div>    
            </Fragment>
        ) : (
            <Fragment></Fragment>
        ) }
       </Fragment>
    )
  };

export default ProfilePage;