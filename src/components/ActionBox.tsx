import React from 'react'
import './ActionBox.scss'

interface Props {
  img: string;
  label: string;
  height?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ActionBox: React.FC<Props> = ({ img, label, height, onClick }) => {
  return (
    <div onClick={onClick} className='ActionBox'>
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
