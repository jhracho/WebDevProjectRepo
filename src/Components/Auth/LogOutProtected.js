// toplevel component to run LogoutPage through a protected route
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import LogOutPage from "./LogOutPage";
import { isAuthed } from "../../Services/AuthService";

const LogOutProtected = () => {

    // authed means user is signed in - our flag is authed bc we only show this if user is logged in
    const authed = isAuthed(); 

    // if not signed in, redirect user to log in
    return (
        <div>
            <ProtectedRoute
            exact
            path="/logout"
            redirectPath="/login"
            flag={authed}
            component={LogOutPage} />
        </div>
    );
}
export default LogOutProtected;