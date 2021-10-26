import { getTopPosts } from "../../Services/PostService";
import React, { useEffect, useState, Fragment } from "react";
import Post from "./Post";
const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTopPosts().then((postResponse) => {
      console.log(postResponse);
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
                <Post likes={post.get("likes")} title={post.get("title")} authorname={post.get("author").get("displayname")} date={post.createdAt.toDateString()}></Post>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default TopPosts;
