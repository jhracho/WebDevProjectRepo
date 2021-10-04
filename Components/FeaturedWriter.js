// component to display writer of the month feature and nomination form
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function FeaturedWriter() {
    // in the future, this should be dynamic or like tied to an author object (once we make that) so it's easier to update each month
    return html`
        <div class='writer-heading'>    
            <h2>Writer of the Month:</h2>
        </div>
        <div class='writer-body'>
            <img src='../images/headshot.jpg'></img>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac tempor neque. Nulla sit 
        amet tellus id massa elementum pellentesque in a arcu. Donec eget lacus pharetra, vestibulum metus ut, 
        dapibus velit. Sed ac urna pellentesque, fermentum orci vel, bibendum magna. Morbi ac quam quam. Sed 
        aliquet elit sit amet mauris iaculis, nec fermentum urna maximus. Donec ligula ante, sagittis eu lacus ac, 
        aliquet efficitur magna. Phasellus in turpis quis nibh condimentum pulvinar. Praesent malesuada enim erat, eu mollis ipsum ornare eu. 
        Aenean vestibulum hendrerit nulla, fringilla elementum est finibus hendrerit. Suspendisse potenti.</h5>
        </div>
    `;
}