import React, { useState } from 'react';


function Textform(props) {
    
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleDownClick = () => {
        console.log("button clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        //console.log("button clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopyClick = () => {
        // console.log("Copy button clicked");
        // var newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
        
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 className="mb-2">{props.heading}</h2>

                <div className="mb-3">

                    <textarea value={text} onChange={handleOnChange} name="myBox" id="myBox" cols="30" rows="10"
                     style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode ==='dark'?'#13466e':'white',margin: '0px', width: '667px', height: '275px' }}></textarea>

                </div>

                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(function(n){
                    return n!==''}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}

export default Textform;
