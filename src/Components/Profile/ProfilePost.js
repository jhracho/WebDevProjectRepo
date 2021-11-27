import {React, Fragment} from "react";
import { Link } from "react-router-dom";

// Post child component that gets props
const ProfilePost = (post) => {
    const path = '/edit/' + post.post.id;
    
    return (
        <Fragment>
            <h4><Link to={path}>{post.post.get("title")}</Link> <i>({post.post.createdAt.toDateString()})</i></h4>
        </Fragment>
    )
}

export default ProfilePost;