import {React, Fragment} from "react";

const Post = (likes, title, authorname, date) => {
    return (
        <Fragment>
            <h3><i class="fas fa-thumbs-up"> {likes}</i><a href='post/post.html'>{title}</a></h3>
            <h5><i> {authorname} - {date}</i></h5>
        </Fragment>
    )
}

export default Post;