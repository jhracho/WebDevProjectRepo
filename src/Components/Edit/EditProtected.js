// toplevel component to protect EditPage (so only user who authored post can edit it)
import React, {useState, useEffect} from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import EditPage from "./EditPage";
import { isPostEditableCurrentUser } from "../../Services/PostService";

const EditProtected = () => {
    const { postId } = useParams();
    const path = "/edit/" + postId;
    const [isEditable, setIsEditable] = useState();
    const [isEditableSet, setIsEditableSet] = useState();

    // determine whether post is editable and set flag accordingly
    useEffect(() => {
        isPostEditableCurrentUser(postId).then((response) => {
            setIsEditable(response);
            setIsEditableSet(true);
        });
    }, [postId]);

    // if not author of post, redirect user to public post page
    // hardcoded (instead of using <ProtectedRoute>) to facilitate parameter usage
    // and wait until we've set whether it's editable, so that we don't redirect too soon
    if (isEditableSet) {
        return (
            <div>
            { isEditable ? (
                <Route path={path} render={ () => (
                    <EditPage postId={postId}></EditPage>
                 ) }/>
            ) : (
                <Redirect to={'/post/' + postId} />
            )}
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
    
}
export default EditProtected;