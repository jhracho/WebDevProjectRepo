import React, { useEffect, useState, Fragment } from "react";
import { getLatest } from "../../Services/post-axios.js";

var postCheck = false;

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatest('2021-23-09').then((data) => {
      setPosts(data);
    });
  }, [posts]);

  return (
    <div class='column latest-module'>
      <h2>Latest Posts:</h2>
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
                <Fragment>
                <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='post/post.html'>${post.title}</a></h3>
                <h5><i>${post.author} - ${post.posttime}</i></h5>
                </Fragment>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default LatestPosts;
