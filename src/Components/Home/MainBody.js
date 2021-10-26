import React from "react";
import LatestPosts from "./LatestPosts";
import TopPosts from "./TopPosts";
import FeaturedWriter from "./FeaturedWriter";
import WriterForm from "./WriterForm";

const MainBody = () =>{
    return(
        <div class='main-body'>
            <LatestPosts />
            <TopPosts />
            <FeaturedWriter />
            <WriterForm />
        </div>
    );
};

export default MainBody;