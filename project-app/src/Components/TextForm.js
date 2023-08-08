import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpCase =()=>{
    console.log("button is clicked."+text)
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChange =(event)=>{
    console.log("On changed.")
    setText(event.target.value)
  }
  
  const handleOncase =()=>{
    let newLText = text.toLowerCase()
    setText(newLText)
  }

  const [text,setText] = useState('')
  return (
    <>
      <div className="mb-3">
        <div className="container">
        <h1>{props.heading}</h1>
  

        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-3" onClick={handleUpCase}>convert to uppercase</button>
        <button className="btn btn-primary" onClick={handleOncase}>Convert to lowercase</button>
        </div>
        <div className="container my-3">

          <h2>Your text summary</h2>
          <p>{text.split(" ").length} word and {text.length} charchter</p>
          <p>{0.008* text.split(" ").length} Minutes to read</p>
          <h3>preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
