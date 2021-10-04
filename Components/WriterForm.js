// component to display writer of the month nomination form
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function WriterForm() {
    // in future, we should make this submittable so that it actually interfaces with our database and saves the suggested writer nominations
    return html`
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