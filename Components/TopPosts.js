// stateful parent component that displays the top posts from a given week
// integrates with data service to get the top posts
import { html, useState, useEffect } from "https://unpkg.com/htm/preact/standalone.module.js";
import { getTopPosts } from './post-axios.js';

export function TopPosts(){
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
                    html` 
                        <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='post/post.html'>${post.title}</a></h3>
                        <h5><i>${post.author} - ${post.posttime}</i></h5>
                    `
            )}
        </div>
    `
}