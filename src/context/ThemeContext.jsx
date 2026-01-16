import React, { createContext,useState } from 'react'

export const ThemeModeContext=createContext();


const ThemeContext = (props) => {
    const [count, setCount] = useState(0)
    console.log('value of count from ThemeContext is '+count);
    
  return (
    <ThemeModeContext.Provider value={[count,setCount]}>
      {props.children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeContext