import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode,setmode]=useState("light")
  const togglemode=()=>
  {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#21537c"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
    }
  }
  return (
   
   <>
   <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
   <div className="container my-3">
    <TextForm heading="Enter text to Analyze" mode={mode} />
    // <About/>
   </div>
   </>
  );
}

export default App;
