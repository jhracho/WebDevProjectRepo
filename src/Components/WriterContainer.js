// component to display writer of the month feature and nomination form
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import { WriterFeature } from "./WriterFeature.js";
import { WriterForm } from "./WriterForm.js";

export function WriterContainer() {
    return html`
        <${WriterFeature}></${WriterFeature}>
        <${WriterForm}></${WriterForm}>
    `;
}