import React, { useEffect, useState, Fragment } from "react";
import { getLatestPosts } from "../../Services/PostService";
import Post from "./Post";

const LatestPosts = () => {
  // Calls Post service to get the five most recent posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatestPosts().then((postResponse) => {
      setPosts(postResponse);
    });
  }, []);

  return (
    <div className='column latest-module'>
      <h2>Latest Posts:</h2>
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
              <Post key={post.id} post={post}></Post>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default LatestPosts;