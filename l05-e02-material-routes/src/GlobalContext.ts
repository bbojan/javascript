import { createBrowserHistory } from 'history'
import React from 'react'

const browserHistory = createBrowserHistory()

export const initialGlobals = { browserHistory }
export const GlobalContext = React.createContext(initialGlobals)
