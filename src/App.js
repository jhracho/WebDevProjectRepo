import {
    html,
    render
  } from "https://unpkg.com/htm/preact/standalone.module.js";

import {NavBar} from "./Components/NavBar.js";
import {HomePage} from "./Components/HomePage.js";

function App() {
    return html`
        <${NavBar}></${NavBar}>
        <${HomePage}></${HomePage}>
    `;
}
  
render(html` <${App} />`, document.getElementById("app"));