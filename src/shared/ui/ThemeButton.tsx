import React, { useEffect } from 'react'

import Button from '../../shared/ui/Button.tsx'
import useLocalStorage from '../lib/hooks/useLocalStorage.ts'

function ThemeButton(props) {
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
    <Button onClick={toggleTheme}>
      {theme === 'light' ? 'светлая' : 'темная'}
    </Button>
  )
}

export default ThemeButton