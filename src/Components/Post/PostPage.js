import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../Services/PostService.js";

import Heading from "./Heading.js";

const PostPage = () =>{
    const params = useParams();
    const postID = params.id;
    
    const [post, setPost] = useState(null);
    useEffect(() => {
        getPostById(postID).then((response) => {
            setPost(response);
          });
    }, []);
        
    return(
        <div class='post-box'>
            {post && <Heading post={post}/>} 

            <div class="line"></div>

            <div class='post'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac tempor neque. Nulla sit 
                    amet tellus id massa elementum pellentesque in a arcu. Donec eget lacus pharetra, vestibulum metus ut, 
                    dapibus velit. Sed ac urna pellentesque, fermentum orci vel, bibendum magna. Morbi ac quam quam. Sed 
                    aliquet elit sit amet mauris iaculis, nec fermentum urna maximus. Donec ligula ante, sagittis eu lacus ac, 
                    aliquet efficitur magna.</p>
                <p>Phasellus in turpis quis nibh condimentum pulvinar. Praesent malesuada enim erat, eu mollis ipsum ornare eu. 
                    Aenean vestibulum hendrerit nulla, fringilla elementum est finibus hendrerit. Suspendisse potenti. Phasellus 
                    et finibus eros, non volutpat massa. In vel maximus nibh. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Phasellus eget est sollicitudin lacus tempor vestibulum sed non eros. Suspendisse vel 
                    volutpat urna. Nunc ut consequat neque. Sed nibh lectus, posuere ac consectetur non, interdum non sem. Phasellus 
                    consequat vehicula arcu at condimentum. Nam at lacus vitae metus ornare sollicitudin et nec libero. Nam tincidunt 
                    venenatis fringilla.</p>
            </div>
            
        </div>
    );
};

export default PostPage;