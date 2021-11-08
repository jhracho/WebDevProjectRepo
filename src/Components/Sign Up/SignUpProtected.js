// toplevel component to run SignUpPage through a protected route
import React, {useState} from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import SignUpPage from "./SignUpPage";

const SignUpProtected = () => {

    // TODO: we need to connect this to a state variable storing whether we are signed in or out at a given time
    // TODO: make sure the flag works so that if signed in, we don't display signup page
    const [authed, setAuthed] = useState(false);

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