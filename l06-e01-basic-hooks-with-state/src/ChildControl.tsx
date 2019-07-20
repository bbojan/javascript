import React from 'react'
import './App.css'
import { useDrawSize } from './hooks'
import logo from './logo.svg'

export const ChildControl: React.FC = () => {
  const size = useDrawSize()

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div> {`   Width:  ${size.w}   |   Height:  ${size.h}   `} </div>
    </div>
  )
}
