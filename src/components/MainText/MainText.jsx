import React from 'react'
import './Maintext.css'

const MainText = ({main, sub}) => {
  return (
    <div className="MainText" style={{fontSize:"3rem", fontWeight: "600"}}>{main} <span style={{color: "yellow"}}>{sub}</span></div>
  )
}

export default MainText