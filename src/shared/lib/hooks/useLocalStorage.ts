import { useEffect, useState } from 'react'

function useLocalStorage(key: string, defaultState: string) {
  const [value, setValue] = useState(()=>{
    const stored = localStorage.getItem(key)

    if(stored !== null){
      return stored
    } else {
      return defaultState;
    }

  })

  useEffect(()=>{
    localStorage.setItem(key, value || [])
  }, [key, value])

  return [value, setValue] as const
}
export default useLocalStorage