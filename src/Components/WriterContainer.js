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

        <h1>Nominate Your Favorite Writer!</h1>
        <h4>Fill out this form to nominate a writer for Writer of the Month!</h4>
        <div class='nominate-form'>
            <form method='post' action='#'>
                <input type='text' placeholder='Writer Screen Name' id='writer-input'/>
                <label for='tyle-select'>Who are you?</label>
                <select name='type-select' id='type-select'>
                    <option value='Student'>Student</option>
                    <option value='Alumni'>Alumni</option>
                    <option value='Athlete'>Athlete</option>
                </select>
                <textarea name='desc-input' columns='20' rows='4' required='required' placeholder='Tell us why!'></textarea>
                <input type='submit' id='submit-button' value='Submit Nomination'/>
            </form>
        </div>
    `;
}