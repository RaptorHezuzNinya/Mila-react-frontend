import React, { Component } from 'react'
import classNames from 'classNames'
import Navigation from './components/Navigation'
import MenuDrawer from './components/MenuDrawer'
import ModalRoot from './modals/ModalRoot'
// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
// styles for app layout
import './assets/styles/base/layout.sass'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false,
      activeRoute: ''
    }
    this.handleOpenMenuDrawer = this.handleOpenMenuDrawer.bind(this)
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  handleOpenMenuDrawer () {
    console.log('clicked')
    this.setState({
      openDrawer: !this.state.openDrawer
    })
  }

  render() {
    const { openDrawer } = this.state
    const contentClass = classNames({
      'content': true,
      'content-drawer-open-desk': openDrawer,

    })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <Navigation handleOpenMenuDrawer={this.handleOpenMenuDrawer}/>
          <MenuDrawer handleOpenMenuDrawer={this.handleOpenMenuDrawer} openDrawer={this.state.openDrawer}/>
          <ModalRoot />
          <div className={contentClass}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
