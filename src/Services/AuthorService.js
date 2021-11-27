// service with operations for parse authors
import Parse from "parse";
import { getCurrentUser } from "./AuthService";

// create operation - new author (with condensed information)
// called whenever a new user is created
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

// create operation - new author (with all information)
export const createAuthor = ({displayname, firstname, lastname, username, bio, userPtr}) => {
    const Author = Parse.Object.extend("Author");
    const author = new Author();
    author.set("displayname", displayname);
    author.set("firstname", firstname);
    author.set("lastname", lastname);
    author.set("username", username);
    author.set("bio", bio);
    author.set("user", userPtr);

    return author.save().then((result) => {
        return result;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

export const editAuthor = (authorId, displayname, firstname, lastname, bio) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(authorId).then((author) => {
        author.set("displayname", displayname);
        author.set("firstname", firstname);
        author.set("lastname", lastname);
        author.set("bio", bio);

        return author.save().then((result) => {
            return result;
        }).catch((error) => {
            console.error(error.code + ": " + error.message);
        });
    });
};

// read operation - get author by id
export const getAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((result) => {
        return result;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

// read operation - get author by displayname
export const getAuthorByDisplayname = (displayname) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    query.equalTo("displayname", displayname);
    return query.find().then((result) => {
        if (result.length === 0) {
            return;
        }
        return result[0];
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
        // make sure this is a writer who has a bio
        var randIndex = Math.floor(Math.random() * results.length);
        while(!results[randIndex].get("bio")) {
            randIndex = Math.floor(Math.random() * results.length);
        }
        return results[randIndex];
    });
};

export const isUsedDisplayname = (displayname) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.find().then((results) => {
        console.log('in query');
        for (var i in results) {
            console.log(results[i].get("displayname"), displayname);
            if (results[i].get("displayname") === displayname) {    
                return true;
            }
        }
        return false;
    }).catch((error) => {
        console.error(error.code + ": " + error.message);
    });
};

// delete operation - delete author by id
export const removeAuthorById = (id) => {
    const Author = Parse.Object.extend("Author");
    const query = new Parse.Query(Author);
    return query.get(id).then((author) => {
        author.destroy();
    });
};