import {React, Fragment} from "react";
import { Link } from "react-router-dom";

// Post child component that gets props
const Post = (post) => {
    const path = '/post/' + post.post.id;
    
    return (
        <Fragment>
            <h3><i className="fas fa-thumbs-up"> {post.post.get("likes")}</i><Link to={path}>{post.post.get("title")}</Link></h3>
            <h5><i> <a href={'/author/' + post.post.get("author").get("displayname")} className='post-module-author'>{post.post.get("author").get("displayname")}</a> - {post.post.createdAt.toDateString()}</i></h5>
        </Fragment>
    )
}

export default Post;