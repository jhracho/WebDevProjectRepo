// serivce with operations for parse posts
import Parse from "parse";

// create operation - new post
export const createPost = ({title, subtitle, text, likes, dislikes, author}) => {
    console.log("attempting to create a post with text: ", text);
    const Post = Parse.Object.extend("Post");
    const post = new Post();
    post.set("title", title);
    post.set("subtitle", subtitle);
    post.set("text", text);
    post.set("likes", likes);
    post.set("dislikes", dislikes);
    post.set("author", author);

    return post.save().then((result) => {
        return result;
    });
};

// read operation - get post by id
export const getPostById = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    return query.get(id).then((result) => {
        return result;
    });
};

// read operation - get all posts
export const getAllPosts = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    return query.find().then((results) => {
        return results;
    });
};

// delete operation - delete post by id
// eventually may want to add some sort of feature where users can only delete posts they've created
export const removePostById = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    return query.get(id).then((post) => {
        post.destroy();
    });
};