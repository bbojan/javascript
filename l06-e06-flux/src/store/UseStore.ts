import React from 'react'
import { GlobalActionType } from './GlobalActions'
import { GlobalState, GlobalStoreContext } from './GlobalState'

export interface UsableStore {
  globalState: GlobalState
  dispatch: React.Dispatch<GlobalActionType>
}

export function useStore(): UsableStore {
  const [globalState, dispatch] = React.useContext(GlobalStoreContext)
  return { globalState, dispatch }
}
