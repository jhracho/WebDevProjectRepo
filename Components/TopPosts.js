// stateful component that displays the top posts from a given week
// integrates with data service to get the top posts
import { html, useState, useEffect } from "https://unpkg.com/htm/preact/standalone.module.js";
import { getTopPosts } from './post-axios.js';

export function TopPosts(){
    // useState and useEffect used to asynchronously set top posts data
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        return getTopPosts("2021-23-09").then((data) => {
            setPosts(data);
        });
    },[posts]);
    
    return html`
        <div class='column latest-module'>
            <h2>Top Posts:</h2>
            ${posts.map(
                (post) =>
                    // this can be improved by creating a Post.js file to display the post instead of having this html here
                    // however, with the static data the way that it is right now, we can't access a post by ID so it's easier
                    // to just have the html here with the understanding that it will be changed for feature 4
                    html` 
                        <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='post/post.html'>${post.title}</a></h3>
                        <h5><i>${post.author} - ${post.posttime}</i></h5>
                    `
            )}
        </div>
    `
}