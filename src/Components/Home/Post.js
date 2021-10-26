import {React, Fragment} from "react";

const Post = (post) => {
    console.log("POSTY POST");
    console.log(post);
    return (
        <Fragment>
            <h3><i class="fas fa-thumbs-up"> {post.post.get("likes")}</i><a href='post/post.html'>{post.post.get("title")}</a></h3>
            <h5><i> {post.post.get("author").get("displayname")} - {post.post.createdAt.toDateString()}</i></h5>
        </Fragment>
    )
}

export default Post;