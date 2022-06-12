import React from 'react'
import './SignInCard.scss'
import FormItem from './FormItem'
import FormSubmitButton from './FormSubmitButton'

interface Props {
  isSignUp?: boolean
}

const SignInCard: React.FC<Props> = ({ isSignUp }) => {
  const footerText = `${isSignUp ? 'Do not' : 'Already'} have an Account?`

  const onClick = () => window.location.href = `/${isSignUp ? 'signin' : 'signup'}`

  return (
    <div className='SignInCard'>
      <div className="SignInHeadingContainer">
        <div className="SignInHeading">Sign {isSignUp ? 'up' : 'in'} to your account</div>
      </div>
      <div className='SignInBoxContainer'>
        <div className='SignInBox'>
          <form action="">
            <FormItem label="Email Address" type="text" />
            <FormItem label="Password" type="password" />

            {isSignUp ?
              <FormItem isSignUp label="Confirm Password" type="password" />
              : null}

            <FormSubmitButton label={isSignUp ? 'Sign Up' : 'Sign In'} />

            <div className='FooterTextContainer'>
              <div className='FooterText'>
                {footerText}
                <span onClick={onClick} className="FooterAuthButton">{isSignUp ? 'Sign In' : 'Sign Up'}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInCard
