import React from 'react'
import './App.css'
import { MyFormClass } from './MyFormClass'

const App: React.FC = () => {
  const [shown, setShown] = React.useState(false)
  const myRef = React.useRef<MyFormClass>(null)

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
      {shown && <MyFormClass ref={myRef} />}
    </div>
  )
}

export default App
