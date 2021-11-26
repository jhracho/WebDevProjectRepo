// child component to display post information, given that post as a prop
import {React, Fragment} from "react";

const PostDetailed = (post) => {
    // handle react object creation of parse objects
    var postId = post.post.id;
    return (
        <Fragment>
            <h3><i className="fas fa-thumbs-up"> {post.post.get("likes")} </i><a href={'/post/' + postId}> {post.post.get("title")} </a> - <i>{post.post.createdAt.toDateString()}</i></h3>
            <h5><i> {post.post.get("subtitle")}</i></h5>
        </Fragment>
    )
}

export default PostDetailed;