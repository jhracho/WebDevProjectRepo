// component to display all main sections of the home page
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import { HomePageHeader } from "./HomePageHeader.js";
import { PostContainer } from "./PostContainer.js"
import { WriterContainer } from "./WriterContainer.js";

export function HomePage() {
    return html`
        <div class='background-body'>
            <${HomePageHeader}></${HomePageHeader}>

            <div class='main-body'>
                <${PostContainer}></${PostContainer}>
                <${WriterContainer}></${WriterContainer}>
            </div>
        </div>
    `;
}