import { createPost } from "../../Services/PostService";
import { getAllAuthors } from "../../Services/AuthorService";
import { useEffect, useState, Fragment } from "react";

const PostForm = () => {
    // declare state variables and onChange handlers for the form inputs
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [text, setText] = useState();
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState('');

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
    // this sets the authors array, as well as initializing author to the default (first element in authors)
    // FUTURE:  will want to only pull in authors that the user has access to (as a signed in user)
    useEffect(() => {
        getAllAuthors().then((response) => {
            setAuthors(response);
            setAuthor(response[0]);
          });
    }, []);

    // FUTURE: figure out why submission isn't clearing the other text boxes and figure that out
    const onClickHandler = () => {
        var likes = 0;
        var dislikes = 0;
        // find author object based on the selected name
        var authorObj = authors.find((a => a.get("displayname") === author));
        
        createPost({title, subtitle, text, likes, dislikes, authorObj});
    };

    return(
        <form>
            {authors.length > 0 && (       
            <Fragment>
                <p>Author</p>
                <select name='author-input' required='required' onChange={onChangeAuthor}>
                {authors.map(
                    (author) => (
                        <option value={author.author}>{author.get("displayname")}</option>
                    ))}
                </select>
            </Fragment>
            )}
            <p>Title</p>
            <input type='text' onChange={onChangeTitle} name='title-input' maxlength='50' required='required' placeholder='What should your post be called?'/>
            <p>Sub-Heading</p>
            <input type='text' onChange={onChangeSubtitle} name='heading-input' maxlength='100' required='required' placeholder='A one-line description of your post.'/>
            <p>Story</p>
            <textarea name='story-input' onChange={onChangeText} columns='20' rows='4' required='required' placeholder='Share your Story!'></textarea>
            <button type='button' onClick={onClickHandler} name='submit-button'>Submit for Review!</button>
        </form>
    );
};

export default PostForm;