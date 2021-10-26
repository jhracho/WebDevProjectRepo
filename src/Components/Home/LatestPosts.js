import React, { useEffect, useState, Fragment } from "react";
import { getLatestPosts } from "../../Services/PostService";
import Post from "./Post";

const LatestPosts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatestPosts().then((postResponse) => {
      console.log(postResponse);
      setPosts(postResponse);
    });

  }, []);

  return (
    <div class='column latest-module'>
      <h2>Latest Posts:</h2>
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
              <Post post={post}></Post>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default LatestPosts;
