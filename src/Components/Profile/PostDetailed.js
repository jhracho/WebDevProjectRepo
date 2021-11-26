import {React, Fragment} from "react";

// Post child component that gets props
const PostDetailed = (post) => {
    var postId = post.post.id;
    return (
        <Fragment>
            <h3><i class="fas fa-thumbs-up"> {post.post.get("likes")} </i><a href={'/post/' + postId}> {post.post.get("title")} </a> - <i>{post.post.createdAt.toDateString()}</i></h3>
            <h5><i> {post.post.get("subtitle")}</i></h5>
        </Fragment>
    )
}

export default PostDetailed;