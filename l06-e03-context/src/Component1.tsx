import React from 'react'
import './App.css'
import { Component20 } from './Component20'

export const MyContext = React.createContext<string>('')

export const Component1: React.FC = () => {
  return (
    <MyContext.Provider value={'MELON'}>
      <div className="App">
        <header className="App-header">
          <p>Component 1</p>
          <Component20 />
        </header>
      </div>
    </MyContext.Provider>
  )
}
