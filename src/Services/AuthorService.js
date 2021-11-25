// service with operations for parse authors
import Parse from "parse";
import { getCurrentUser } from "./AuthService";

// create operation - new author
export const createAuthorOnSignUp = (displayname, firstname, lastname, userPtr) => {
    const Author = Parse.Object.extend("Author");
    const newAuthor = new Author();
    newAuthor.set("displayname", displayname);
    newAuthor.set("firstname", firstname);
    newAuthor.set("lastname", lastname);
    newAuthor.set("user", userPtr);

    return newAuthor.save().then((result) => {
        return result;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

export const createAuthor = ({displayname, firstname, lastname, username, bio}) => {
    const Author = Parse.Object.extend("Author");
    const author = new Author();
    author.set("displayname", displayname);
    author.set("firstname", firstname);
    author.set("lastname", lastname);
    author.set("username", username);
    author.set("bio", bio);

    return author.save().then((result) => {
        return result;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

// read operation - get author by id
export const getAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((result) => {
        console.log('returning author obj ', result);
        return result;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

// read operation - get all authors
export const getAllAuthors = () => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.find().then((results) => {
        return results;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

// read operation - get all authors tied to the current user
export const getAuthorsForUser = () => {
    const user = getCurrentUser();
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    query.equalTo("user", user);
    return query.find().then((results) => {
        return results;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
        return [];
    });
};


// read operation - get random author
export const getRandAuthor = () => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.find().then((results) => {
        var randIndex = Math.floor(Math.random() * results.length)
        return results[randIndex];
    });
};

// delete operation - delete author by id
// not used yet but should be eventually
// eventually may want to add some sort of feature where users can only delete authors they've created
export const removeAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((author) => {
        author.destroy();
    });
};