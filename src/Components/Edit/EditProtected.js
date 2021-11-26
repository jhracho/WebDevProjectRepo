// toplevel component to run createPage through a protected route
import React, {useState, useEffect} from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import EditPage from "./EditPage";
import { isPostEditableCurrentUser } from "../../Services/PostService";

const EditProtected = () => {
    // flag represents whether user can edit a post or not
    const { postId } = useParams();
    const path = "/edit/" + postId;
    const [isEditable, setIsEditable] = useState();
    const [isEditableSet, setIsEditableSet] = useState();
    useEffect(() => {
        isPostEditableCurrentUser(postId).then((response) => {
            console.log('post is editable');
            setIsEditable(response);
            setIsEditableSet(true);
        });
    }, [postId]);

    // if not author of post, redirect user to public post page
    // hardcoded (instead of using <ProtectedRoute>) to facilitate parameter usage
    if (isEditableSet) {
        return (
            <div>
            { isEditable ? (
                <Route path={path} render={ () => (
                    <EditPage postId={postId}></EditPage>
                 ) }/>
            ) : (
                <Redirect to='/home' />
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