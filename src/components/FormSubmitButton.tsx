import React from 'react'
import './FormSubmitButton.scss'

interface Props {
  label: string
}

const FormSubmitButton: React.FC<Props> = ({ label }) => {
  return (
    <div className='FormSubmitButton'>
      <div className='SubmitButtonContainer'>
        <div className='SubmitButton'>{label}</div>
      </div>
    </div>
  )
}

export default FormSubmitButton
