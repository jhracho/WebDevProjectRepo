// toplevel component to run SignUpPage through a protected route
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import SignUpPage from "./SignUpPage";
import { isAuthed } from "../../Services/AuthService";

const SignUpProtected = () => {

    /// authed means user is signed in - our flag is !authed bc we only show this if user is not logged in
    const authed = isAuthed();

    return (
        <div>
            <ProtectedRoute
            exact
            path="/signup"
            redirectPath="/"
            flag={!authed}
            component={SignUpPage} />
        </div>
    );
}
export default SignUpProtected;