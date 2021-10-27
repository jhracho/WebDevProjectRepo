import { getTopPosts } from "../../Services/PostService";
import React, { useEffect, useState, Fragment } from "react";
import Post from "./Post";
const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTopPosts().then((postResponse) => {
      setPosts(postResponse);
    });

  }, []);
 
  return (
    <div class='column latest-module'>
      <h2>Top Posts:</h2>
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

export default TopPosts;