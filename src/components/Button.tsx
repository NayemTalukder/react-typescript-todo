import React from 'react'
import './Button.scss'

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <div className='Button'>{label}</div>
  )
}

export default Button
