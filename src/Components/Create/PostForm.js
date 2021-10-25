import { createPost } from "../../Services/PostService";
import { getAuthorById } from "../../Services/AuthorService";

const PostForm = () => {
    const onClickHandler = () => {
        // TODO: figure out why title (& subtitle and text) aren't being pulled from the form
        var title = document.getElementById('title-input');        
        console.log("title: ", title);
        var subtitle = document.getElementById('heading-input');
        var text = document.getElementById('story-input');
        var likes = 0;
        var dislikes = 0;
        // TODO: convert author from Object to Pointer for initialization
        var author = getAuthorById("1ccfOPsoZd"); // just for now - display dropdown list of authors
        createPost({title, subtitle, text, likes, dislikes, author});
    };

    return(
        <form>
            <p>Title</p>
            <input type='text' name='title-input' maxlength='50' required='required' placeholder='What should your post be called?'/>
            <p>Sub-Heading</p>
            <input type='text' name='heading-input' maxlength='100' required='required' placeholder='A one-line description of your post.'/>
            <p>Story</p>
            <textarea name='story-input' columns='20' rows='4' required='required' placeholder='Share your Story!'></textarea>
            <button type='button' onClick={onClickHandler} name='submit-button'>Submit for Review!</button>
        </form>
        
    );
};

export default PostForm;