import React from 'react'

interface ButtonProp {
  onClick?: ()=> void;
  className?: string;
  children?: React.ReactNode
}



const Button: React.FC<ButtonProp> = ({onClick, className, children}) => {

  const variant = {}


  return (
    <button onClick={onClick} className={className} type={'button'}>
      {children}
    </button>
  )
}

export default Button