import React, { useState } from 'react'

export default function About(props) {

    let mystyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }
    // const [mystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [mystyle,setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btntext,setBtnText] = useState("Dark Mode")

    // const toggleStyle =()=>{
    //     if(mystyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Light Mode")
    //     }
    // }
    return (
        <>
            <div className='container' style ={mystyle}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style ={mystyle} >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button"  style ={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
\
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style ={mystyle}>
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style ={mystyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style ={mystyle}>
                               TextUtils is a free character counter tool that Provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style ={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style ={mystyle}>
                                This word Counter software works in any web browsers such as Chrome, Internet Explorer, Safari, Firefox, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
                </div> */}
            </div>
        </>
    )
}
                    
