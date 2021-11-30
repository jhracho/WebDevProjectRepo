//This is a function for testing and will log a message on the console
Parse.Cloud.define("hello", async (request) => {
    console.log("Hello from Cloud Code!");
    return "Hello from Cloud Code!";
});

// this is a function to edit a user's information
Parse.Cloud.define("editUserProperties", async (request) => {
    const {objectId, username, firstname, lastname, email} = request.params;
    var User = Parse.Object.extend(Parse.User);
    var query = new Parse.Query(User);
    let result2 = await query.find({ useMasterKey: true });

    // ensure request is valid (ie not trying to use someone else's email or username)
    for (var i in result2) {
        if (result2[i].id !== objectId) {
            if (result2[i].get("email") === email) {
                return('email ' + email + ' is already in use, please try again!')
            }
            else if (result2[i].get("username") === username) {
                return('username ' + username + ' is already in use, please try again!');
            }
        }
    }

    // update information on result object and save to server
    let result = await query.get(objectId, { useMasterKey: true });
    result.set("username", username);
    result.set("firstname", firstname);
    result.set("lastname", lastname);
    result.set("email", email);
    try {
        result.save(null, {useMasterKey: true});
        return true;
    } catch (error) {
        return (error.code + ": " + error.message);
    }
});

// this is a function to edit a user's password (while signed in)
Parse.Cloud.define("editUserPassword", async(request) => {
    const {objectId, password} = request.params;
    var User = Parse.Object.extend(Parse.User);
    var query = new Parse.Query(User);
    let result = await query.get(objectId, { useMasterKey: true });
    result.set("password", password);
    try {
        result.save(null, {useMasterKey: true});
        return true;
    } catch (error) {
        return (error.code + ": " + error.message);
    }
});