// stateful parent component that displays the latest posts
// integrates with data service to get the latest posts for that day
import { html, useState, useEffect } from "https://unpkg.com/htm/preact/standalone.module.js";

import {Post} from "./Post.js";
// TODO: include import for integration with data service

export function LatestPosts() {
    /* TODO: uncomment this out and integrate with data service
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        //DATA_SERVICE_INTEGRATION_GOES_HERE
    }, [posts]);
    */
    
    //TODO: Delete this const - used for testing individual portion of feature 3 only
    const posts = [
    {
        "id":"1",
        "author":"jhracho",
        "title":"Sample Title",
        "subtitle":"Sample Subtitile",
        "posttime":"11:23 pm",
        "likes":"3000",
        "dislikes":"0",
        "text":"Lorem ipsum..."
    },
    {
        "id":"2",
        "author":"jhracho",
        "title":"Sample Title",
        "subtitle":"Sample Subtitile",
        "posttime":"11:12 pm",
        "likes":"3000",
        "dislikes":"0",
        "text":"Lorem ipsum..."
    }];
    return html`
        <div class='column latest-module'>
            <h2>Latest Posts:</h2>
            ${posts.map((post) => html`<${Post} post=${post}></${Post}>`)}
            
        </div>
    `;
}