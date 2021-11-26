import React, { useState, useEffect, Fragment } from "react";
import { getAuthorById } from "../../Services/AuthorService.js";

const Heading = (post) =>{
    // Get author display name from the author attribute of post object
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        getAuthorById(post.post.get("author").id).then((response) => {
            setAuthor(response);
          });
    }, [post]);

    // Manipulate the createdAt property to make it user-readable
    const createdAt = post.post.createdAt.toString().split(" ").slice(0,5).join(" ");

    // Create paragraph array and remove any extra newlines
    const arr = post.post.get('text').split('\n');
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === '') {
            arr.splice(i, 1);
        } 
        else {
            i++;
        }
    }

    return(
        <Fragment>
            <div className='post-heading'>
                <h1>{post.post.get("title")}</h1>
                <h2><em>{post.post.get("subtitle")}</em></h2>
                <h3>{author && author.get('displayname')} | {createdAt}</h3>

                <i id='post-like' className="fas fa-thumbs-up">{post.post.get("likes")}</i>
                <i id='post-dislike' className="fas fa-thumbs-down">{post.post.get("dislikes")}</i>
            </div>
            
            <div className='post-line'></div>

            {arr.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </Fragment>
    );
};

export default Heading;