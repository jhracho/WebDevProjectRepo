import React, { Fragment, useEffect, useState } from "react";
import { getRandAuthor } from "../../Services/AuthorService";

// Calls author service to select a random author to display to user
const FeaturedWriter = () => {
    const [author, setAuthor] = useState();
    const [avatar, setAvatar] = useState();
    const [avatarURL, setAvatarURL] = useState();
    
    useEffect(() => {
        getRandAuthor().then((response) => {
            setAuthor(response);
          });
    }, []);

    // each time the author changes, pull in the avatar file and store it
    useEffect(() => {
        if (author) {
            setAvatar(author.get("avatar"));
        }
    }, [author]);

    // each time the avatar file changes, update the url
    useEffect(() => {
        if (avatar) {
            setAvatarURL(avatar.url());
        }
    }, [avatar]);

    if (author) {
        return (
            <Fragment>
            <div className='writer-heading'>    
                <h2>Random Author: <a href={'/author/' + author.get("displayname")}>{author.get("displayname")}</a></h2>
            </div>
            <div className='writer-body'>
                { avatar && (
                    <img src={avatarURL} title="Writer Headshot" alt={author.get("displayname")}></img>
                )}
                <h5>{author.get("bio")}</h5>
            </div>
            </Fragment>
        );
    }
    else {
        return (
            <div className='writer-heading'>    
                <h2>No Authors Found</h2>
            </div>
        );
    }
};

export default FeaturedWriter;