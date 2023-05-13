import React, { useState } from 'react'

export const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }

    const handleCleartext = () => {
        setText("");
        props.showAlert("Remove extra space", "success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("handle extra space", "success");

    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div class="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowercase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCleartext}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter Something in the textbox above to preview it. '}</p>
            </div>
        </>
    )
}
