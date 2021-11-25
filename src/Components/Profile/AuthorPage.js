import React, {Fragment, useState, useEffect} from "react";
import AuthorBio from "./AuthorBio";
import AuthorPosts from "./AuthorPosts";
import {useParams} from "react-router-dom";
import { getAuthorById } from "../../Services/AuthorService";

const AuthorPage = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState();
    
    useEffect(() => {
        getAuthorById(authorId).then((response) => {
            setAuthor(response);
        });
    }, [authorId]);

    return(
      <div class='background-body'>
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