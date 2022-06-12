import React from 'react'
import './FormItem.scss'

interface Props {
  label: string,
  type: string,
  isSignUp?: boolean
}

const FormItem: React.FC<Props> = ({ label, type, isSignUp }) => {
  const placeHolder = `Please Enter Your ${label} ${isSignUp ? 'Again' : ''}`

  return (
    <div className='FormItem'>
      <div className='FormItemLabelContainer'>
        <div className='FormItemLabel'>{label}</div>
      </div>
      <input className='InputField' type={type} placeholder={placeHolder} />
    </div>
  )
}

export default FormItem
