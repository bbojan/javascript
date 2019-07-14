import {
  AppBar,
  CssBaseline,
  makeStyles,
  Tab,
  Tabs as MuiTabs,
  Typography,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const tabs = [
  { name: 'Tab 1', key: 101 },
  { name: 'Tab 2', key: 102 },
  { name: 'Tab 3', key: 103 },
]

const App: React.FC = () => {
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
            console.log(`${selectedTab.name} | ${selectedTab.key}`)
          }}
          variant={'scrollable'}
          scrollButtons={'on'}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.key}
              label={tab.name}
              style={{ fontSize: '1rem', fontWeight: 'bold' }}
            />
          ))}
        </MuiTabs>
      </AppBar>
      {tabs.map(
        (tab, index) =>
          index === selected && (
            <Typography
              key={tab.key}
              component="div"
              style={{ padding: 8 * 3, fontSize: '10rem', fontWeight: 'bold' }}
            >
              {`${tab.key} = ${tab.name}`}
            </Typography>
          )
      )}
    </div>
  )
}

export default App
