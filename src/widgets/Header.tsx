import React from 'react'
import ThemeButton from '../shared/ui/ThemeButton.tsx'

function Header(props) {
  return (
    <header className='dark:bg-black bg-white'>
      <h1 className={"dark:text-white text-black"}>Tz-List</h1>
      <ThemeButton/>
      <p className='bg-white dark:bg-black'>123</p>
      <h1 className="text-red-500 dark:text-white">Tz-List</h1>
      // или
      <h1 className="text-red-500 dark:text-neutral-100">Tz-List</h1>
    </header>
  )
}

export default Header