'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()
export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("dark")

    const rawSetTheme =(theme)=>{
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)
        localStorage.setItem("color-theme", theme)
    }

    useEffect(()=>{
        rawSetTheme(theme)
    },[theme])
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(ThemeContext)
}