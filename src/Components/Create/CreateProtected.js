// toplevel component to run createPage through a protected route
import React, {useState} from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import CreatePage from "./CreatePage";

const CreateProtected = () => {

    // TODO: we need to connect this to a state variable storing whether we are signed in or out at a given time
    const [authed, setAuthed] = useState(false);

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