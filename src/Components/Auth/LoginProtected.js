// toplevel component to run LoginPage through a protected route
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import LoginPage from "./LogInPage";
import { isAuthed } from "../../Services/AuthService";

const LoginProtected = () => {

    // authed means user is signed in - our flag is !authed bc we only show this if user is not logged in
    const authed = isAuthed(); 

    return (
        <div>
            <ProtectedRoute
            exact
            path="/login"
            redirectPath="/"
            flag={!authed}
            component={LoginPage} />
        </div>
    );
}
export default LoginProtected;