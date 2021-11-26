// form to edit an existing post
import { editPost, getPostById } from "../../Services/PostService";
import { getAuthorsForUser } from "../../Services/AuthorService";
import React, { useEffect, useState, Fragment } from "react";

const EditForm = (postId) => {
    // declare state variables and onChange handlers for the form inputs
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [text, setText] = useState();
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState('');
    const [likes, setLikes] = useState();
    const [dislikes, setDislikes] = useState();

    const onChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const onChangeSubtitle = (e) => {
        e.preventDefault();
        setSubtitle(e.target.value);
    }

    const onChangeText = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const onChangeAuthor = (e) => {
        e.preventDefault();
        setAuthor(e.target.value);
    }

    // this function executes once, when the page is first loaded
    // this sets the authors array, as well as initializing author to the current author from post
    // this function also pulls in the post ID and sets the title/subtitle/text/likes/dislikes based on that
    useEffect(() => {
        getAuthorsForUser().then((response) => {
            getPostById(postId.postId).then((postResponse) => {
                setTitle(postResponse.get('title'));
                setSubtitle(postResponse.get('subtitle'));
                setText(postResponse.get('text'));
                setAuthor(postResponse.get('author').get('displayname'));
                setLikes(postResponse.get('likes'));
                setDislikes(postResponse.get('disllikes'));

                // set default selected author to be what is currently author
                const authorSorted = [postResponse.get('author'), ...response.filter(item => item.get('displayname') !== postResponse.get('author').get('displayname'))];
                setAuthors(authorSorted);
            });
            
          });
    }, [postId]);

    const onClickHandler = () => {
        // find author object based on the selected name
        var authorObj = authors.find((a => a.get("displayname") === author));

        // call edit post service with new information
        editPost(postId, title, subtitle, text, likes, dislikes, authorObj).then((response) => {
            alert(title + ' was successfully edited!');
            window.location.href = '/post/' + postId.postId;
        }).catch((error) => {
            console.error(error.code + ": " + error.message);
        });
    };

    return(
        <form>
            {authors.length > 0 && (       
            <Fragment>
                <p>Author</p>
                <select name='author-input' required='required' onChange={onChangeAuthor}>
                {authors.map(
                    (authorDisp) => (
                        <option value={authorDisp.author}>{authorDisp.get("displayname")}</option>
                    ))}
                </select>
            </Fragment>
            )}
            <p>Title</p>
            <input type='text' onChange={onChangeTitle} name='title-input' maxLength='50' required='required' value={title}/>
            <p>Sub-Heading</p>
            <input type='text' onChange={onChangeSubtitle} name='heading-input' maxLength='100' required='required' value={subtitle}/>
            <p>Story</p>
            <textarea name='story-input' onChange={onChangeText} columns='20' rows='4' required='required' value={text}></textarea>
            <button type='button' onClick={onClickHandler} name='submit-button' id='submit-button'>Save Changes</button>
        </form>
    );
};

export default EditForm;