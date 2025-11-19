import React, { useEffect } from 'react'

import Button from '../../shared/ui/Button.tsx'
import useLocalStorage from '../lib/hooks/useLocalStorage.ts'
import Moon from "../../../public/icons/theme/Moon.tsx";
import Sun from "../../../public/icons/theme/Sun.tsx";

function ThemeButton() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {

    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

  }, [theme])

  return (
    <Button  onClick={toggleTheme}>
      {theme === 'light' ? <Sun/> : <Moon/>}
    </Button>
  )
}

export default ThemeButton