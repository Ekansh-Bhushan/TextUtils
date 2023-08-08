import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
  
  <Navbar title="Ekansh" aboutText="About Us"/>
  {/* <About/> */}
  <TextForm heading = "Enter the Text here to analyze."/>
    </>
  );
}

export default App;
