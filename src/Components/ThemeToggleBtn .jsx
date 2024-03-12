'use client'
import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useGlobalContext } from '../context/ThemeContext';
// import { ThemeContext } from '../context/Theme'


const ThemeToggleBtn = () => {
  const { theme, setTheme } = useGlobalContext();
  return (
    <div className=''>
      {theme === 'dark' ?
        (<div className='cursor-pointer flex items-center hover:text-accent' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark')  }}> <HiSun size={20} /></div>) : (<div className='cursor-pointer flex items-center hover:text-accent' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}> <HiMoon size={20}/>  </div>)}
    </div>
  )
}

export default ThemeToggleBtn