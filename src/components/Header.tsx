import React from 'react'
import './Header.scss'
import Button from './Button'

interface Props {

}

const Header: React.FC<Props> = ({ }) => {
  return (
    <div className='Header'>
      <div className="HeaderContainer">
        <div className="HeadingContainer">
          <span className='Heading' >To Do</span>
        </div>
        {/* <Button label="Sign In" /> */}
      </div>
    </div>
  )
}

export default Header
