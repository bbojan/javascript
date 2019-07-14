import React from 'react'
import './App.css'
import logo from './logo.svg'
import { withMousePosition } from './withMousePosition'

export const Img = () => <img src={logo} className="App-logo" alt="logo" />

export const ImgThatListens = withMousePosition(Img)

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Img /> */}
        <ImgThatListens />
      </header>
    </div>
  )
}

export default App
