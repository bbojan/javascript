import {
  AppBar,
  CssBaseline,
  makeStyles,
  Tab,
  Tabs as MuiTabs,
} from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router'
import { GlobalContext } from './GlobalContext'
import { TabContentContainer } from './TabContentContainer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const tabs = [
  { name: 'Tab 1', id: 101, route: 'tab_1' },
  { name: 'Tab 2', id: 102, route: 'tab_2' },
  { name: 'Tab 3', id: 103, route: 'tab_3' },
]

const App: React.FC = () => {
  const globals = React.useContext(GlobalContext)
  const classes = useStyles()
  const [selected, setSelected] = React.useState(0)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <MuiTabs
          value={selected}
          onChange={(_: any, value: number) => {
            setSelected(value)

            const selectedTab = tabs[value]
            console.log(`${selectedTab.name} | ${selectedTab.id}`)

            globals.browserHistory.push(`/${selectedTab.route}`)
          }}
          variant={'scrollable'}
          scrollButtons={'on'}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              label={tab.name}
              style={{ fontSize: '1rem', fontWeight: 'bold' }}
            />
          ))}
        </MuiTabs>
      </AppBar>
      {tabs.map((tab, index) => {
        return (
          <Route
            key={tab.id}
            exact
            path={`/${tab.route}`}
            render={() => {
              return <TabContentContainer {...tab} />
            }}
          />
        )
      })}
    </div>
  )
}

export default App
