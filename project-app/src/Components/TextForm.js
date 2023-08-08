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

  const handleCopy =()=>{
    let copied = document.getElementById("mybox")
    copied.select()
    navigator.clipboard.writeText(copied.value)
  
  }

  const handleClear=()=>{
    setText("")
  }

  const handleExtraSpace=()=>{
    let removeExtra = text.split(/[ ]+/)
    setText(removeExtra.join(" "))
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
        <button className="btn btn-primary mx-3" onClick={handleOncase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>remove extra space</button>

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
