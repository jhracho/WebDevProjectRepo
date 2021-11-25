import React, {Fragment, useState, useEffect} from "react";
import { getTopPostsByAuthor } from "../../Services/PostService";
import PostDetailed from "./PostDetailed"

const AuthorPosts = (author) =>{
    const authorId = author.author.id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getTopPostsByAuthor(authorId).then((postResponse) => {
            setPosts(postResponse);
          });
    }, [authorId]);

    return(
        <div class='column author-module'>
      <h2>Top Posts by {author.author.get("displayname")}:</h2>
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
              <PostDetailed post={post}></PostDetailed>
        ))}
        </Fragment>
      )}
    </div>
    );
};

export default AuthorPosts;