import React, { Component } from 'react'
// import { Link } from 'react-router'
import Navigation from './components/Navigation'
import MenuDrawer from './components/MenuDrawer'
import ModalRoot from './modals/ModalRoot'

// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
//general style imports


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false
    }
    this.handleOpenMenuDrawer = this.handleOpenMenuDrawer.bind(this)
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <Navigation />
          <ModalRoot />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
