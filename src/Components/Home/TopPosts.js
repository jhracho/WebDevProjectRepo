import { getTopPosts } from "../../Services/PostService";
import React, { useEffect, useState, Fragment } from "react";

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
                <Fragment>
                <h3><i class="fas fa-thumbs-up"> {post.get("likes")}</i><a href='post/post.html'>{post.get("title")}</a></h3>
                <h5><i> {post.get("author").get("displayname")} - {post.createdAt.toDateString()}</i></h5>
                </Fragment>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default TopPosts;
