import React, { Fragment, useEffect, useState } from "react";
import { getRandAuthor } from "../../Services/AuthorService";

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
            <div class='writer-heading'>    
                <h2>Random Writer: {author.get("displayname")}</h2>
            </div>
            <div class='writer-body'>
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
            <div class='writer-heading'>    
                <h2>No Writers Found</h2>
            </div>
        );
    }
};

export default FeaturedWriter;