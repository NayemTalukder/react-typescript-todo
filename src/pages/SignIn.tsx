import React from 'react'
import './SignIn.scss'
import SignInCard from '../components/SignInCard'

interface Props {

}

const SignIn: React.FC<Props> = () => {
  return (
    <div className='SignIn'>
      <SignInCard />
    </div>
  )
}

export default SignIn
