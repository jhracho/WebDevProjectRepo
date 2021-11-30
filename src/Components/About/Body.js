import React from "react";

const Body = () =>{
    return (
        <div className='main-body'>
            <p>The Shamrock was started by Jake Hracho and Nora Tucker as a project for their Modern Web Development class at the University of Notre Dame. 
                Nora and Jake are both avid Notre Dame football fans and wanted to create a place for other Notre Dame football fans to come togther and discuss the team.</p>
                <br></br>
            <p>Features of the site include:</p>
                <ul>
                    <li><p>Ability to create an account to interact with site</p></li>
                    <li><p>Ability to post as multiple authors (if user would like to use psuedonym)</p></li>
                    <li><p>Home page to show recent and top posts on website, as well as highlighting a random author</p></li>
                    <li><p>About page (this page) to highlight information about us and the site</p></li>
                    <li><p>Create page to create a post</p></li>
                    <li><p>Edit page to edit posts</p></li>
                    <li><p>Post page to view public post page</p></li>
                    <li><p>Author page to view public bio and top posts by any author</p></li>
                    <li><p>User page to view and edit information for user and all authors connected to account</p></li>
                </ul>
            <br></br>
            <p>Thanks for checking out the site! We look forward to seeing your posts!</p>
        </div>
    );
};

export default Body;