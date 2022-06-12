import React, { useState, useEffect, useRef, useCallback } from 'react'
import './StartPageActionBox.css'
import ActionBox from './ActionBox'
import Login from '../asset/img/Login.png';
import Explore from '../asset/img/Explore.png'

const StartPageActionBox: React.FC = () => {
  return (
    <div className='StartPageActionBox'>
      <ActionBox img={Login} label="Sign In" height={25} />
      <ActionBox img={Explore} label="Explore Without Sign In" />
    </div>
  )
}

export default StartPageActionBox
