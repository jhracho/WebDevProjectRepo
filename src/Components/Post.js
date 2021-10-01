// stateless child component to display a single post, with its number of likes, title, author, and time it was posted
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function Post(post) {
    return html`
        <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='../../Feature 2/post/post.html'>${post.title}</a></h3>
        <h5><i>${post.author} - ${post.posttime}</i></h5>
    `;
}