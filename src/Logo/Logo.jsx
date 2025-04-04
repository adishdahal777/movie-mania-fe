import React from 'react'
import './logo.css'

const Logo = ({src, logoName}) => {
  return (
    <>
    <div className="logoName">
    <img src={src} ></img>
    <div>{logoName}</div>
    </div>
    </>
  )
}

export default Logo