import React from "react";

const Body = () =>{
    return (
        <div className='main-body'>
            <p>The Shamrock was started by Jake Hracho and Nora Tucker as a project for their Modern Web Development class at the University of Notre Dame. 
                Nora and Jake are both avid Notre Dame football fans and wanted to create a place for other Notre Dame football fans to come togther and discuss the team.</p>
                <br></br>
            <p>Features of the site include:</p>
                <ul>
                    <li>Ability to create an account to interact with site</li>
                    <li>Ability to post as multiple authors (if user would like to use psuedonym)</li>
                    <li>Home page to show recent and top posts on website, as well as highlighting a random author </li>
                    <li>About page (this page) to highlight information about us and the site</li>
                    <li>Create page to create a post</li>
                    <li>Edit page to edit posts</li>
                    <li>Post page to view public post page</li>
                    <li>Author page to view public bio and top posts by any author</li>
                    <li>User page to view and edit information for user and all authors connected to account</li>
                </ul>
            <br></br>
            <p>Thanks for checking out the site! We look forward to seeing your posts!</p>
        </div>
    );
};

export default Body;