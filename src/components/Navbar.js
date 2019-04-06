import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import windowSize from 'react-window-size'

import { withStyles } from '@material-ui/core/styles'

import {
  AppBar, Tabs, Tab, SwipeableDrawer, Button, List, ListItem, ListItemText
} from '@material-ui/core'

import Logo from './Logo'

const styleOverrides = theme => ({
  appbar: {
    ...theme.container
  },
  toolbar: {
    padding: '12px',
    width: '100%'
  },
  tabs: {
    width: '100%',
    padding: '0 12px'
  },
  label: {
    fontSize: '1em',
    letterSpacing: 1.5
  },
  indicator: {
    height: 3
  },
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  },
  list: {
    minWidth: 200
  }
})

class Navbar extends PureComponent {

  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    const { classes, value, navData, handleChange, windowWidth } = this.props
    const isMobile = windowWidth < 760

    const desktopNav = (
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        classes={{
          root: classes.tabs,
          indicator: classes.indicator
        }}
      >
        {navData.map((page, index) => (
          <Tab
            key={page.id}
            label={page.name}
            classes={{
              label: classes.label,
              selected: classes.selected
            }}
          />
        ))}
      </Tabs>
    )

    const sideList = (
      <div className={classes.list}>
        <List>
          {navData.map(item => (
            <ListItem button key={item.id}>
              <Link to={item.path}>
                <ListItemText>{item.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    )


    const mobileNav = (
      <div style={{height: 48}}>
        <Button onClick={this.toggleDrawer}>Open Nav</Button>
          <SwipeableDrawer
            open={open}
            onClose={this.toggleDrawer}
            onOpen={this.toggleDrawer}
          >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )

    return (
      <AppBar classes={{root: classes.appbar}}>
        <div className={classes.toolbar}>
          <Logo compact/>
        </div>
        {isMobile ? mobileNav : desktopNav}
      </AppBar>
    )
  }
}

export default windowSize(
  withStyles(styleOverrides)(Navbar)
)
