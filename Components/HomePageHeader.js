// component to display static heading on home page
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function HomePageHeader() {
    return html`
        <!-- Title portion -->
        <div class='heading'>
            <h1>The Shamrock</h1>
            <div class='line'></div>
            <h2>Blog and Message Board for The Fighting Irish</h2>
        </div>
        <br />
    `;
}