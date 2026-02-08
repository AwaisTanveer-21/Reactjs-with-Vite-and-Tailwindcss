import React, { createContext, useState } from 'react'

export const ThemeProvide = createContext()

const Theme = ({ children }) => {

  const [mode, setMode] = useState("light")

  function ThemeToogle() {
    setMode(prev => (prev === 'light' ? "dark" : "light"))
  }

  return (
    <ThemeProvide.Provider value={{ mode, ThemeToogle }}>
      {children}
    </ThemeProvide.Provider>
  )
}

export default Theme
