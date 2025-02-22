import React, { useState } from 'react'



export default function TextForm(props) {
    const handleOnChange = (event) =>{
        let inputData = event.target.value
        setText(inputData)
        inputData = inputData.split(" ");
        countWord(inputData.length)
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success")

    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
    }
    

    const [text, setText] = useState("");
    const [count, countWord] = useState("");
    
    const themeColors = {
        dark: { backgroundColor: "grey", color: "white" },
        light: { backgroundColor: "white", color: "black" },
        primary: { backgroundColor: "#8785a8", color: "white" },
        danger: { backgroundColor: "#a88585", color: "white" },
        success: { backgroundColor: "#86a885", color: "white" },
        warning: { backgroundColor: "#a8a885", color: "black" }
      };
      
    return (
        <>
        <div className={`container text-${themeColors[props.mode] }`}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Comment</label>
                <textarea type="text" className="form-control" id="comment" value={text} onChange={handleOnChange} rows='8'   style={themeColors[props.mode] || themeColors.light} />
            </div>
            <button type="submit" className={`btn btn-${props.mode} mx-1`} onClick={handleUpClick}>Convert to upper case</button>
            <button type="submit" className={`btn btn-${props.mode} mx-1`} onClick={copyText}>Copy</button>

        </div>
        <div className="container my-3" style={{color :props.mode ==='dark'?'white':'black'}}>
            <h1>Total number of character</h1>
            <p>{count} words and {text.length} character</p>
            <p>{0.008 * text.length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text?text:"Enter your text to preview it"}</p>
        </div>
    </>
  )
}
