// toplevel component to run createPage through a protected route
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import CreatePage from "./CreatePage";
import { isAuthed } from "../../Services/AuthService";

const CreateProtected = () => {

    // authed means user is signed in - our flag is authed bc we only show this if user is logged in
    const authed = isAuthed(); 

    return (
        <div>
            <ProtectedRoute
            exact
            path="/create"
            redirectPath="/login"
            flag={authed}
            component={CreatePage} />
        </div>
    );
}
export default CreateProtected;