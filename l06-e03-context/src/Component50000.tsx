import React from 'react'
import './App.css'
import { MyContext } from './Component1'

export const Component50000: React.FC = () => {
  const myValue = React.useContext(MyContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>Component 50000</p>
        <h1>{myValue}</h1>
        <div className="App">
          <header className="App-header">
            <p>end</p>
          </header>
        </div>
      </header>
    </div>
  )
}
