import React from 'react'
import './App.css'
import { MyFormClass } from './MyFormClass'

const App: React.FC = () => {
  const [shown, setShown] = React.useState(false)

  return (
    <div className="App">
      <input
        type="checkbox"
        checked={shown}
        onChange={() => setShown(!shown)}
      />
      <label>Show form</label>
      {shown && <MyFormClass />}
    </div>
  )
}

export default App
