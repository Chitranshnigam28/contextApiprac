import { useContext, useState } from 'react'
import './App.css'
import {ThemeModeContext} from './context/ThemeContext';

function App() {
   
  const [count,setCount]=useContext(ThemeModeContext);

  console.log('value of count is '+count);


  return (
    <>
    <button onClick={()=>{
      setCount(count+1);
    }}>Inc count</button>
    <h1>This is an App</h1>
    </>
  )
}

export default App
