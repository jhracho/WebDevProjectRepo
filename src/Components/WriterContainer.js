// component to display writer of the month information (picture, name, and bio)
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function WriterContainer() {
    return html`
        <div class='writer-heading'>    
            <h2>Writer of the Month:</h2>
        </div>
        <div class='writer-body'>
            <img src='../../Feature 2/images/headshot.jpg' style='width: 20vw;'></img>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac tempor neque. Nulla sit 
            amet tellus id massa elementum pellentesque in a arcu. Donec eget lacus pharetra, vestibulum metus ut, 
            dapibus velit. Sed ac urna pellentesque, fermentum orci vel, bibendum magna. Morbi ac quam quam. Sed 
            aliquet elit sit amet mauris iaculis, nec fermentum urna maximus. Donec ligula ante, sagittis eu lacus ac, 
            aliquet efficitur magna. Phasellus in turpis quis nibh condimentum pulvinar. Praesent malesuada enim erat, eu mollis ipsum ornare eu. 
            Aenean vestibulum hendrerit nulla, fringilla elementum est finibus hendrerit. Suspendisse potenti.</h5>
        </div>
    `;
}