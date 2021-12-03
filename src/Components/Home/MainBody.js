import React from "react";
import LatestPosts from "./LatestPosts";
import TopPosts from "./TopPosts";
import FeaturedWriter from "./FeaturedWriter";

const MainBody = () =>{
    return(
        <div className='main-body'>
            <LatestPosts />
            <TopPosts />
            <FeaturedWriter />
        </div>
    );
};

export default MainBody;