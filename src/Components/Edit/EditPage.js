import React from "react";
import EditForm from "./EditForm.js";

const Edit = (postId) => {
    return(
      <div class='post-box'>
          <h1>Edit Your Post</h1>
          <div class='line'></div>
          <EditForm postId={postId.postId}/>
      </div>
    )
  };

export default Edit;