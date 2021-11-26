// toplevel author page to display author's bio and top posts
// pull in authorID from url and pass into bio and posts components
import React, {Fragment, useState, useEffect} from "react";
import AuthorBio from "./AuthorBio";
import AuthorPosts from "./AuthorPosts";
import {useParams} from "react-router-dom";
import { getAuthorByDisplayname } from "../../Services/AuthorService";

const AuthorPage = () => {
    const { displayname } = useParams();
    const [author, setAuthor] = useState();
    
    // executes once, pull in author object from displayname
    useEffect(() => {
        getAuthorByDisplayname(displayname).then((response) => {
            setAuthor(response);
        });
    }, [displayname]);

    return(
      <div className='background-body'>
        { author ? (
            <Fragment>
                <AuthorBio author={author}/>
                <AuthorPosts author={author} />
            </Fragment>
        ) : 
        (<Fragment>
          <div className='writer-heading'>    
                <h2>{displayname} is not an author</h2>
            </div>
        </Fragment>)
        }
      </div>      
    )
  };

export default AuthorPage;