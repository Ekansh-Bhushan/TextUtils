import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpCase =()=>{
    console.log("button is clicked."+text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" Converted to Uppercase","success :")
  }

  const handleOnChange =(event)=>{
    console.log("On changed.")
    setText(event.target.value)
  }
  
  const handleOncase =()=>{
    let newLText = text.toLowerCase()
    setText(newLText)
    props.showAlert(" Converted to Lowercase","success :")
  }

  // const handleCopy =()=>{
  //   let copied = document.getElementById("mybox")
  //   copied.select();
  //   navigator.clipboard.writeText(copied.value);
  
  // }

  const handleClear=()=>{
    setText("")
  }

  const handleExtraSpace=()=>{
    let removeExtra = text.split(/[ ]+/)
    setText(removeExtra.join(" "))
    props.showAlert(" Extra spaces removed","success :")
  }

  // const handleCopy=()=>{
  //   console.log("copy kar raha hu")
  //   var text = document.getElementById('mybox');
  //   text.select();
    
  //   navigator.clipboard.writeText(text.value)
  //   props.showAlert("copied to clipboard","success :")
  // }

  const [text,setText] = useState('')
  return (
    <>
      <div className="mb-3">
        <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}
          id="mybox">
        <h1 className="my-2">{props.heading}</h1>
  

        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black"}}
          id="mybox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpCase}>convert to uppercase</button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleOncase}>Convert to lowercase</button>
        {/* <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button> */}
        <button className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>remove extra space</button>

        </div>
        <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>

          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{
            return element.length!== 0
          }).length} word and {text.length} charchter</p>
          <p>{0.008* text.split(" ").filter((element)=>{
            return element.length!== 0
          }).length} Minutes to read</p>
          <h3>preview</h3>
          <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
}
