import React from 'react'
import './App.css'
import { GlobalReducer } from './store/GlobalReducer'
import { GlobalStoreContext, InitialGlobalState } from './store/GlobalState'
import { View } from './View'

const App: React.FC = () => {
  return (
    <div className="App">
      <View />
    </div>
  )
}

export const AppWithStore = () => {
  const [globalState, dispatch] = React.useReducer(
    GlobalReducer,
    InitialGlobalState
  )

  return (
    <GlobalStoreContext.Provider value={[globalState, dispatch]}>
      <App />
    </GlobalStoreContext.Provider>
  )
}
