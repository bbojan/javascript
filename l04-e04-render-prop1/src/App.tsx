import React from 'react'
import './App.css'
import { BigItem } from './BigItem'
import { List } from './List'

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
      <List
        items={items}
        measureHeight={(_, index) => (index % 2 === 0 ? 40 : 80)}
        renderItem={item => <BigItem label={item.label} />}
      />
    </div>
  )
}

export default App
