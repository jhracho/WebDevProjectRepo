// serivce with operations for parse posts
import Parse from "parse";

// create operation - new post
export const createPost = ({title, subtitle, text, likes, dislikes, authorObj}) => {
    console.log("creating post with text: ", text);
    const Post = Parse.Object.extend("Post");
    const post = new Post();
    post.set("title", title);
    post.set("subtitle", subtitle);
    post.set("text", text);
    post.set("likes", likes);
    post.set("dislikes", dislikes);
    post.set("author", authorObj);

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
    query.include("author");
    return query.find().then((results) => {
        return results;
    });
};

// read operation - get 5 most recent posts
export const getLatestPosts = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    query.descending("createdAt");
    query.limit(5);
    return query.find().then((results) => {
        return results;
    });
};

// read operation - get 5 most liked posts
export const getTopPosts = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    query.descending("likes");
    query.limit(5);
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