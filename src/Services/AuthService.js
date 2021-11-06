import Parse from "parse";

export const createUser = (newUser) => {
    const User = Parse.Object.extend("User");
    if (newUser.password !== newUser.confirm){
        alert("Passwords do not match!");
        return Promise.resolve(false);
    }

    const user = new Parse.User();
    user.set("username", newUser.username);
    user.set("firstname", newUser.firstname);
    user.set("lastname", newUser.lastname);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
    
    return user.signUp().then((newUserSaved) => {
        return newUserSaved;
        }).catch((error) => {
            alert(`Error: ${error.message}`);
    });
};
