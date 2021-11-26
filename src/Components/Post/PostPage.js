import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../Services/PostService.js";

import Story from "./Story.js";

const PostPage = () =>{
    const params = useParams();
    const postID = params.id;
    
    const [post, setPost] = useState(null);
    useEffect(() => {
        getPostById(postID).then((response) => {
            setPost(response);
          });
    }, [postID]);

    // Leading Indent or &nbsp; or \n\n
    return(
        <div className='post-box'>
            {post && <Story post={post}/>} 
        </div>
    );
};

export default PostPage;