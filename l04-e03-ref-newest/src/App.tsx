import React from 'react'
import './App.css'
import { BadApi, MyForm } from './MyForm'

const App: React.FC = () => {
  const [shown, setShown] = React.useState(false)
  const myRef = React.createRef<BadApi>()

  return (
    <div className="App">
      <input
        type="checkbox"
        checked={shown}
        onChange={() => {
          const text1 =
            shown && myRef.current && myRef.current.badImperativeApiGetText()

          text1 && alert(text1)

          setShown(!shown)
        }}
      />
      <label>Show form</label>
      {shown && <MyForm ref={myRef} />}
    </div>
  )
}

export default App
