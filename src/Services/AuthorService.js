// serivce with operations for parse authors
import Parse from "parse";

// create operation - new author
export const createAuthor = ({displayname, firstname, lastname, username}) => {
    const Author = Parse.Object.extend("Author");
    const author = new Author();
    author.set("displayname", displayname);
    author.set("firstname", firstname);
    author.set("lastname", lastname);
    author.set("username", username);

    return author.save().then((result) => {
        return result;
    });
};

// read operation - get author by id
export const getAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((result) => {
        return result;
    });
};

// read operation - get all authors
export const getAllAuthors = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.find().then((results) => {
        return results;
    });
};

// delete operation - delete author by id
// eventually may want to add some sort of feature where users can only delete authors they've created
export const removeAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((author) => {
        author.destroy();
    });
};