import React, { useState, useEffect, Fragment } from "react";
import { getAuthorById } from "../../Services/AuthorService.js";
import { likePost } from "../../Services/PostService.js";

const Heading = (post) =>{
    // Get author display name from the author attribute of post object
    const [author, setAuthor] = useState(null);

    // state for likes/dislikes to represent changes without having to pull object each time
    const [likes, setLikes] = useState();
    const [dislikes, setDislikes] = useState();

    useEffect(() => {
        // set # of likes/dislikes to display on page
        setLikes(post.post.get("likes"));
        setDislikes(post.post.get("dislikes"));
        getAuthorById(post.post.get("author").id).then((response) => {
            setAuthor(response);
          });
    }, [post]);

    // onClick handlers for like and dislike buttons
    const onClickLike = (e) => {
        console.log('clicked like');
        e.preventDefault();
        likePost(post.post.id, 1);
        setLikes(likes + 1);
    }

    const onClickDislike = (e) => {
        e.preventDefault();
        likePost(post.post.id, -1);
        setDislikes(dislikes + 1);
    }

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
                <i id='post-like' className="fas fa-thumbs-up" onClick={onClickLike}>{likes}</i>
                <i id='post-dislike' className="fas fa-thumbs-down" onClick={onClickDislike}>{dislikes}</i>
            </div>
            
            <div className='post-line'></div>

            <div id='post-text-area'>
                {arr.map((paragraph, i) => (
                    <h2 key={i}>{paragraph}</h2>
                ))}
            </div>
        </Fragment>
    );
};

export default Heading;