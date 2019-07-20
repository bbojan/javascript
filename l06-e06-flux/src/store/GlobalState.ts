import React from 'react'
import { GlobalActionType } from './GlobalActions'
import { User } from './models'

export interface GlobalState {
  something: number
  users: User[]
}

export const InitialGlobalState: GlobalState = {
  something: 42,
  users: [],
}

export type GlobalUseReducer = [GlobalState, React.Dispatch<GlobalActionType>]

export const GlobalStoreContext = React.createContext([
  InitialGlobalState,
  () => undefined,
] as GlobalUseReducer)
