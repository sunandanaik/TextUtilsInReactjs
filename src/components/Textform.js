import React, { useState } from 'react';


function Textform(props) {
    const [text, setText] = useState('Enter Text here');

    const handleUpClick = () => {
        console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        console.log("button clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        //console.log("button clicked");
        let newText = '';
        setText(newText);
    }
    const handleCopyClick = () => {
        //console.log("button clicked");
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(text.value);
        
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">

                    <textarea value={text} onChange={handleOnChange} name="myBox" id="myBox" cols="30" rows="10"
                     style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode ==='dark'?'grey':'white',margin: '0px', width: '667px', height: '275px' }}></textarea>

                </div>

                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To Lowercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Textform;
