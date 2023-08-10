import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] =useState('light') //wheter dark mode is on or not
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='black'
      setAlert("light mode","successful")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      setAlert("dark mode","successful")
    }
  }
  return (
    <>
  <Navbar title="TextUtiles" mode = {mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  {/* <About/> */}
  <TextForm heading = "Enter the Text here to analyze." mode = {mode}/>
    </>
  );
}

export default App;
