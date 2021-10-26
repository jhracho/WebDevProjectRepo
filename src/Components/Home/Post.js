import {React, Fragment} from "react";

const Post = (post) => {
    return (
        <Fragment>
            <h3><i class="fas fa-thumbs-up"> {post.get("likes")}</i><a href='post/post.html'>{post.get("title")}</a></h3>
            <h5><i> {post.get("author").get("displayname")} - {post.createdAt.toDateString()}</i></h5>
        </Fragment>
    )
}

export default Post;