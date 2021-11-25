// toplevel component to run createPage through a protected route
import React from "react";
import {useParams} from "react-router-dom";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import EditPage from "./EditPage";
import { isPostEditableCurrentUser } from "../../Services/PostService";

const EditProtected = () => {

    // flag represents whether user can edit a post or not
    const { postId } = useParams();
    const path = "/edit/" + postId;
    const isEditable = isPostEditableCurrentUser(postId);

    // if not author of post, redirect user to public post page
    return (
        <div>
            <ProtectedRoute
            exact
            path={path}
            redirectPath="/home"
            flag={isEditable}
            component={EditPage} />
        </div>
    );
}
export default EditProtected;