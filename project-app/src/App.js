import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const [mode, setMode] =useState('light') //wheter dark mode is on or not
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
  
  <Navbar title="TextUtiles" mode = {mode} toggleMode={toggleMode} />
  {/* <About/> */}
  <TextForm heading = "Enter the Text here to analyze."/>
    </>
  );
}

export default App;
