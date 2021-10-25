import React from "react";
import PostForm from "./PostForm";
import { 
  getAllPosts,
  getPostById,
  createPost,
  removePostById
} from "../../Services/PostService";

const Create = () => {
    return(
      <div class='post-box'>
          <h1>Share Your Story</h1>
          <div class='line'></div>
          <PostForm />
      </div>
    )
  };

export default Create;