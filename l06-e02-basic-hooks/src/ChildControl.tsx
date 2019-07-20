import React from 'react'
import './App.css'
import { useDrawSizeOnWindowTitle } from './hooks'
import logo from './logo.svg'

export const ChildControl: React.FC = () => {
  const size = useDrawSizeOnWindowTitle()

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div> {`   Width:  ${size.w}   |   Height:  ${size.h}   `} </div>
    </div>
  )
}
