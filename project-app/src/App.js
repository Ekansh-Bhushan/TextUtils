import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light') //wheter dark mode is on or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert(" light mode", "success :")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" dark mode", "success :")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes >
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
