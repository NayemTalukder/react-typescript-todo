import React from 'react'
import './ActionBox.css'

interface Props {
  img: string;
  label: string;
  height?: number
}

const ActionBox: React.FC<Props> = ({ img, label, height }) => {
  return (
    <div className='ActionBox'>
      <div className="ActionBoxContainer">
        <img className="image" src={img} alt="Login"></img>
        <div className="labelTextContainer" style={{ height: height }}>
          <span className="LabelText">{label}</span>
        </div>
      </div>
    </div>
  )
}

export default ActionBox
