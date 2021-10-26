import {React, Fragment, useState, useEffect } from "react";
import { getAuthorById } from "../../Services/AuthorService";
const Posts = (postID) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        getAuthorById(postID).then((response) => {
            console.log("response from post2 is ", response);
            setPost(response);
        })
    }, [postID]);

    
    return (
        <Fragment>
            <h3><i class="fas fa-thumbs-up"> {post.get("likes")}</i><a href='post/post.html'>{post.get("title")}</a></h3>
            <h5><i> {post.get("author").get("displayname")} - {post.createdAt.toDateString()}</i></h5>
        </Fragment>
    )
}

export default Posts;