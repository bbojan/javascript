import React from 'react'
import './App.css'
import { BigItem } from './BigItem'
import { ListCH } from './ListCH'

const items = [
  { label: 'AAA' },
  { label: 'BBB' },
  { label: 'CCC' },
  { label: 'DDD' },
  { label: 'EEE' },
  { label: 'FFF' },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <ListCH
        items={items}
        measureHeight={(_, index) => (index % 2 === 0 ? 40 : 80)}
      >
        {item => <BigItem label={item.label} />}
      </ListCH>
    </div>
  )
}

export default App
