// component to display biographic information about an author
import React, {Fragment, useEffect, useState} from "react";
import { getAllPostsByAuthor } from "../../Services/PostService";
import { editAuthor } from "../../Services/AuthorService";
import ProfilePost from "./ProfilePost";

const ProfileAuthor = (author) =>{

    const [editMode, setEditMode] = useState(false);
    const [posts, setPosts] = useState([]);
    const [displayname, setDisplayname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');

    const onChangeDisplayname = (e) => {
        e.preventDefault();
        setDisplayname(e.target.value);
    }

    const onChangeFirstname = (e) => {
        e.preventDefault();
        setFirstname(e.target.value);
    }

    const onChangeLastname = (e) => {
        e.preventDefault();
        setLastname(e.target.value);
    }

    const onChangeBio = (e) => {
        e.preventDefault();
        setBio(e.target.value);
    }

    // executes once upon render
    useEffect(() => {
        setDisplayname(author.author.get("displayname"));
        setFirstname(author.author.get("firstname"));
        setLastname(author.author.get("lastname"));
        setBio(author.author.get("bio"));
        getAllPostsByAuthor(author.author.id).then((response) => {
            setPosts(response);
        });
    }, [author.author]);

    const onClickHandlerEdit = () => {
        setEditMode(true);
    };

    const onClickHandlerSave = () => {
        editAuthor(author.author.id, displayname, firstname, lastname, bio).then((response) => {
            // only switch back to editing mode if edit is successful
            if (response) {
                setEditMode(false);
            }
        });
    };

    return (
        <div className='column profile-data'>
        {
            editMode ? (
                <Fragment>
                    <div className='profile-align'>
                        <div className='profile-left'>
                            <h3>Editing Author Information</h3>
                        </div>
                        <div className='profile-right'>
                            <br></br>
                            <button type='button' onClick={onClickHandlerSave} name='edit-profile-button' id='profile-button'>Save Changes</button>
                        </div>
                    </div>
                    <div className="profile-box">
                        <form>
                        <p>Display Name: </p>
                            <input type='text' onChange={onChangeDisplayname} name='displayname-input' maxLength='50' required='required' value={displayname}/>
                        <p>First Name: </p>
                            <input type='text' onChange={onChangeFirstname} name='firstname-input' maxLength='50' required='required' value={firstname}/>
                        <p>Last Name: </p>
                            <input type='text' onChange={onChangeLastname} name='lastname-input' maxLength='50' required='required' value={lastname}/>
                        <p>Bio: </p>
                            <textarea name='bio-input' onChange={onChangeBio} columns='100' rows='4' required='required' value={bio}></textarea>
                        </form>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className='profile-align'>
                        <div className='profile-left'>
                            <h3><a href={'/author/' + displayname}>{'Author: ' + displayname}</a></h3>
                        </div>
                        <div className='profile-right'>
                            <br></br>
                            <button type='button' onClick={onClickHandlerEdit} name='edit-profile-button' id='profile-button'>Edit Author Information</button>
                        </div>
                    </div>
                    <div className='writer-body'>
                        { author.author.get("avatar") && (
                            <img src={author.author.get("avatar").url()} title="Writer Headshot" alt={displayname}></img>
                        )}
                        <h5>{bio}</h5>
                    </div>
                    <div className='post-section'>
                        {posts.map(
                            (post) => (
                                <ProfilePost key={post.id} post={post}></ProfilePost>
                        ))}
                    </div>
                    </Fragment>
            )
        }
        </div>
    );
};

export default ProfileAuthor;