import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import {PostContainer} from "./PostContainer.js"
import { WriterContainer } from "./WriterContainer.js";

export function HomePage() {
    return html`
        <!-- Home page contents exist on white background -->
        <div class='background-body'>
            
            <!-- Title portion -->
            <div class='heading'>
                <h1>The Shamrock</h1>
                <div class='line'></div>
                <h2>Blog and Message Board for The Fighting Irish</h2>
            </div>
            </br>
            
            <!-- Posts will go here after querying DB of sorts -->
            <div class='main-body'>
                <${PostContainer}></${PostContainer}>
                <${WriterContainer}></${WriterContainer}>
                <img src='../../Feature 2/images/headshot.jpg' style='width: 20vw;'>
            </div>
        </div>
    `;
}