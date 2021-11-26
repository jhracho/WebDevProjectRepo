// child component to display top posts by an author
import React, {Fragment, useState, useEffect} from "react";
import { getTopPostsByAuthor } from "../../Services/PostService";
import PostDetailed from "./PostDetailed"

const AuthorPosts = (author) =>{
    const authorId = author.author.id;
    const [posts, setPosts] = useState([]);

    // given author/ID, pull in author's top posts
    useEffect(() => {
        getTopPostsByAuthor(authorId).then((postResponse) => {
            setPosts(postResponse);
          });
    }, [authorId]);

    // display detailed version of posts to show subtitle - if no posts, say so
    return(
        <div class='column author-module'>
      {posts.length > 0 ? (
        <Fragment>
        <h2>Top Posts by {author.author.get("displayname")}:</h2>
        {posts.map(
            (post) => (
              <PostDetailed post={post} key={post.id}></PostDetailed>
        ))}
        </Fragment>
      ) : <Fragment>
          <h2>{author.author.get("displayname")} has not authored any posts</h2>
          </Fragment>}
    </div>
    );
};

export default AuthorPosts;