// component to display biographic information about an author
import React, {Fragment} from "react";

const AuthorBio = (author) =>{
    // handle react's weird processing of parameters as objects
    const authorObj = author.author;
    return(
        <div class='heading'>
            <h1>About The Author</h1>
            <div class='line'></div>
            <Fragment>
            <div class='writer-heading'>    
                <h2>{authorObj.get("displayname")}</h2>
            </div>
            <div class='writer-body'>
                { authorObj.get("avatar") && (
                    <img src={authorObj.get("avatar").url()} title="Writer Headshot" alt={authorObj.get("displayname")}></img>
                )}
                <h5>{authorObj.get("bio")}</h5>
            </div>
            </Fragment>
        </div>
    );
};

export default AuthorBio;