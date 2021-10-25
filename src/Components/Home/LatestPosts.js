import React, { useEffect } from "react";
import { getAllPosts } from "../../Services/PostService";
import { useState, Fragment } from "react";

const LatestPosts = () => {

  const [posts, setPosts] = useState([]);

  // TODO: figure out why there are infinite calls & how to fix that
  useEffect(() => {
    getAllPosts().then((postResponse) => {
      console.log(postResponse);
      setPosts(postResponse);
    });

  }, []);

  /*
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatest('2021-23-09').then((data) => {
      setPosts(data);
    });
  }, [posts]);

  Inside Return Statement:
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
  */

  // TODO: figure out why only the createdAt part is working
  return (
    <div class='column latest-module'>
      <h2>Latest Posts:</h2>
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
                <Fragment>
                <h3><i class="fas fa-thumbs-up">{post.get("likes")}</i><a href='post/post.html'>{post.get("title")}</a></h3>
                <h5><i> {post.get("author").get("displayname")} - {post.createdAt.toDateString()}</i></h5>
                </Fragment>
        ))}
        </Fragment>
      )}
    </div>
  );
};

export default LatestPosts;
