import React, { useState, useEffect } from "react";
import { getAuthorById } from "../../Services/AuthorService.js";

const Heading = (post) =>{
    // Get author display name from the author attribute of post object
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        getAuthorById(post.post.get("author").id).then((response) => {
            setAuthor(response);
          });
    }, []);

    // Manipulate the createdAt property to make it user-readable
    const createdAt = post.post.createdAt.toString().split(" ").slice(0,5).join(" ");
    
    return(
        <div class='post-heading'>
            <h1>{post.post.get("title")}</h1>
            <h2><em>{post.post.get("subtitle")}</em></h2>
            <h3>{author && author.get('displayname')} | {createdAt}</h3>

            <i id='post-like' class="fas fa-thumbs-up">{post.post.get("likes")}</i>
            <i id='post-dislike' class="fas fa-thumbs-down">{post.post.get("dislikes")}</i>
        </div>
    );
};

export default Heading;