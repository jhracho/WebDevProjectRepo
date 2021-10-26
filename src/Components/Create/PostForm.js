const PostForm = () => {
    return(
        <form>
            <p>Title</p>
            <input type='text' name='title-input' maxlength='50' required='required' placeholder='What should your post be called?'/>
            <p>Sub-Heading</p>
            <input type='text' name='heading-input' maxlength='100' required='required' placeholder='A one-line description of your post.'/>
            <p>Story</p>
            <textarea name='story-input' columns='20' rows='4' required='required' placeholder='Share your Story!'></textarea>
            <input type='submit' name='submit-button' value='Submit for Review'/>
        </form>
    );
};

export default PostForm;