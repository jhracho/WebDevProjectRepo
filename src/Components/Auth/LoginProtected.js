// toplevel component to run LoginPage through a protected route
import React, {useState} from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import LoginPage from "./LogInPage";

const LoginProtected = () => {

    // TODO: we need to connect this to a state variable storing whether we are signed in or out at a given time
    // TODO: make sure the flag works so that if signed in, we don't display login page
    const [authed, setAuthed] = useState(false);

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