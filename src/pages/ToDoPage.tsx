import React from 'react'
import './ToDoPage.scss'
import Header from '../components/Header'

interface Props {

}

const ToDoPage: React.FC<Props> = () => {
  return (
    <div className='ToDoPage'>
      <Header />
    </div>
  )
}

export default ToDoPage
