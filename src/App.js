import React, { PureComponent } from 'react'
import { Switch, Redirect, Route, withRouter } from "react-router-dom"

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/mui-theme'

import { navData } from '@utils/nav-data'

import Home from './pages/'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'

import Navbar from '@components/navbars'
import Background from '@components/background'

function getPageIndex(pathname) {
  const urlPage = pathname.split("/")[1]
  const pageValue = navData.find(page => page.path === `/${urlPage}`)
  return pageValue ? pageValue.id : null
}

class App extends PureComponent {

  static getDerivedStateFromProps(props, state) {
    const value = getPageIndex(props.location.pathname)
    return !!value ? {value} : {value: 0}
  }

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    const { history } = this.props

    this.setState({ value }, () => {
      const newRoute = navData[value].path
      history.push(newRoute)
    })
  }

  render() {
    const { value } = this.state

    return(
      <MuiThemeProvider theme={theme}>
        <Background>
          <Navbar
            value={value}
            navData={navData}
            handleChange={this.handleChange}
          />
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/services/:service' component={Services}/>
            <Route exact path='/contact' component={Contact}/>
            <Redirect to="/home"/>
          </Switch>
        </Background>

        <style global jsx>{`
          * {
            font-size: 16px;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            text-decoration: none;
            list-style: none;
          }
          #root {
            font-family: ${theme.typography.fontFamily};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
              -webkit-transition-delay: 9999s;
              -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
          }
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #dce2e6;
          }
          ::-webkit-scrollbar-thumb {
            background: #506B7A;
          }
        `}</style>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(App)
