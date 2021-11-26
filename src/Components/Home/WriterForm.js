import React, { Fragment } from "react";

const WriterForm = () =>{
    return (
        <div>
            <h1 id="form-header">Nominate Your Favorite Writer!</h1>
            <h4 id="form-subheader"><em>Fill out this form to nominate a writer for Writer of the Month!</em></h4>
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
        </div>
    );
};

export default WriterForm;