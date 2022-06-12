import React from 'react'
import './SignUp.scss'
import SignInCard from '../components/SignInCard'

interface Props {

}

const SignUp: React.FC<Props> = () => {
  return (
    <div className='SignUp'>
      <SignInCard isSignUp />
    </div>
  )
}

export default SignUp
