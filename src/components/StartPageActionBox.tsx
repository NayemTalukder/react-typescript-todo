import React from 'react'
// import { Link } from "react-router-dom";
import './StartPageActionBox.scss'
import ActionBox from './ActionBox'
import Login from '../asset/img/Login.png';
import Explore from '../asset/img/Explore.png'

const StartPageActionBox: React.FC = () => {

  const onExplore = () => window.location.href = '/to-do'

  const signIn = () => window.location.href = '/signin'

  return (
    <div className='StartPageActionBox'>
      <ActionBox onClick={signIn} img={Login} label="Sign In" height={25} />
      <ActionBox onClick={onExplore} img={Explore} label="Explore Without Sign In" />
    </div>
  )
}

export default StartPageActionBox
