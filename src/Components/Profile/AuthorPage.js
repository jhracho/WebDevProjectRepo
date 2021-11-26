// toplevel author page to display author's bio and top posts
// pull in authorID from url and pass into bio and posts components
import React, {Fragment, useState, useEffect} from "react";
import AuthorBio from "./AuthorBio";
import AuthorPosts from "./AuthorPosts";
import {useParams} from "react-router-dom";
import { getAuthorById } from "../../Services/AuthorService";

const AuthorPage = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState();
    
    // executes once, pull in author object from authorId
    useEffect(() => {
        getAuthorById(authorId).then((response) => {
            setAuthor(response);
        });
    }, [authorId]);

    return(
      <div className='background-body'>
        { author && (
            <Fragment>
                <AuthorBio author={author}/>
                <AuthorPosts author={author} />
            </Fragment>
        )}
      </div>      
    )
  };

export default AuthorPage;