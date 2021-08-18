import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode]=useState('dark');
  
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Textform heading="Enter the Text to Analyse" mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
