// parent component to display Top Posts and Latest Posts
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import {TopPosts} from "./TopPosts.js";
import {LatestPosts} from "./LatestPosts.js";

export function PostContainer() {
    return html`
        <${TopPosts}></${TopPosts}>
        <${LatestPosts}></${LatestPosts}>
    `;
}