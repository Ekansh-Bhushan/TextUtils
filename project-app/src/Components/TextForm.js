import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpCase =()=>{
    console.log("button is clicked.")
    setText("changed text now")
  }

  const handleOnChange =()=>{
    console.log("On changed.")
  }

  const [text,setText] = useState('Enter Text Here')
  return (
    <>
      <div className="mb-3">
        <div className="container">
        <h1>{props.heading}</h1>
  

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpCase}>convert to uppercase</button>
        </div>
      </div>
    </>
  );
}
