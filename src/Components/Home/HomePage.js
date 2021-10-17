import React from "react";
import LatestPosts from "./LatestPosts";
import TopPosts from "./TopPosts";
import FeaturedWriter from "./FeaturedWriter";
import WriterForm from "./WriterForm";

const HomePage = () =>{
    return (
    <div class='background-body'>
        <div class='heading'>
            <h1>The Shamrock</h1>
            <div class='line'></div>
            <h2>Blog and Message Board for The Fighting Irish</h2>
        </div>
        <div class='main-body'>
            <LatestPosts />
            <TopPosts />
            <FeaturedWriter />
            <WriterForm />
        </div>
    </div>
    );
};

export default HomePage;