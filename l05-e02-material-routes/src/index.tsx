import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Router } from 'react-router'
import App from './App'
import { GlobalContext, initialGlobals } from './GlobalContext'
import './index.css'
import * as serviceWorker from './serviceWorker'

export const theme = createMuiTheme()

const theApp = (
  <MuiThemeProvider theme={theme}>
    <GlobalContext.Provider value={initialGlobals}>
      <Router history={initialGlobals.browserHistory}>
        <Redirect from="/" to="/tab_1" />
        <App />
      </Router>
    </GlobalContext.Provider>
  </MuiThemeProvider>
)

ReactDOM.render(theApp, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
