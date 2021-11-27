// toplevel component to run ProfilePage through a protected route
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfilePage from "./ProfilePage";
import { isAuthed } from "../../Services/AuthService";

const ProfileProtected = () => {

    // authed means user is signed in - our flag is authed bc we only show this if user is logged in
    const authed = isAuthed(); 

    // if not signed in, redirect user to log in
    return (
        <div>
            <ProtectedRoute
            exact
            path="/profile"
            redirectPath="/login"
            flag={authed}
            component={ProfilePage} />
        </div>
    );
}
export default ProfileProtected;