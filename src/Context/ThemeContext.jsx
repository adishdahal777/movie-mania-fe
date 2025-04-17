import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{

    // context can be used with the useState Hook
    const [theme, setTheme]= useState('light') // initial state 'light'

    //toggle between themes
    const toggleTheme =()=>{
        setTheme((prev)=>(prev === 'light'? 'dark': 'light'))
    }

    //Context value to be provied to consumers
    const contextValue={
        theme,
        toggleTheme
    }

return(
    <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
)
}