// stateful parent component that displays the latest posts
// integrates with data service to get the latest posts for that day
import { html, useState, useEffect } from "https://unpkg.com/htm/preact/standalone.module.js";
import { getLatest } from "./post-axios.js";

// TODO: include import for integration with data service

export function LatestPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        return getLatest('2021-23-09').then((data) => {
            setPosts(data);
        });
    },[posts]);
    
    
    return html`
        <div class='column latest-module'>
            <h2>Latest Posts:</h2>
            ${posts.map(
                (post) =>
                    html` 
                        <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='post/post.html'>${post.title}</a></h3>
                        <h5><i>${post.author} - ${post.posttime}</i></h5>
                      `
            )}
        </div>
    `;
}