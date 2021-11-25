// service with operations for parse posts
import Parse from "parse";
import { getAuthorsForUser } from "./AuthorService";
import { isAuthed } from "./AuthService";

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

// edit operation - edit post by ID
export const editPost = ({postId, title, subtitle, text, likes, dislikes, authorObj}) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    return query.get(postId).then((post) => {
        post.set("title", title);
        post.set("subtitle", subtitle);
        post.set("text", text);
        post.set("likes", likes);
        post.set("dislikes", dislikes);
        post.set("author", authorObj);
        return post.save().then((result) => {
            return result;
        });
    });
}

// read operation - get post by id
export const getPostById = (postId) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    return query.get(postId).then((result) => {
        return result;
    });
};

// read operation - get all posts
export const getAllPosts = () => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    return query.find().then((results) => {
        return results;
    });
};

// read operation - get 5 most recent posts
export const getLatestPosts = () => {
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
export const getTopPosts = () => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    query.descending("likes");
    query.limit(5);
    return query.find().then((results) => {
        return results;
    });
};

// read operatoin - get all posts from the current user
export const getPostsCurrentUser = () => {
        if (isAuthed()) {
        return getAuthorsForUser().then((authors) => {
            const Post = Parse.Object.extend("Post");
            const query = new Parse.Query(Post);
            query.include("author");
            query.containedIn("author", authors);
            return query.find().then((results) => {
                return results;
            });
        }).catch((error) => {
            console.log('error: ', error);
            return;
        });
    } else {
        return;
    }
};

// read operatoin - check if post (via postId) is by current user
export const isPostEditableCurrentUser = (postId) => {
    return getAuthorsForUser().then((authors) => {
        const Post = Parse.Object.extend("Post");
        const query = new Parse.Query(Post);
        query.include("author");
        query.containedIn("author", authors);
        query.equalTo("objectId", postId);
        return query.find().then((results) => {
            if (results.length === 1) {
                return true;
            } else {
                return false;
            }
        });
    }).catch((error) => {
        console.log('error: ', error);
        return false;
    });
};

// read operation - get all posts by a given author
export const getPostsByAuthor = (author) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    query.include("author");
    query.equalTo("author", author);
    return query.find().then((results) => {
        return results;
    });
}

// delete operation - delete post by id
// not used yet but should be eventually
// eventually may want to add some sort of feature where users can only delete posts they've created
export const removePostById = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    return query.get(id).then((post) => {
        post.destroy();
    });
};