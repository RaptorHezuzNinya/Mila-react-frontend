import React, { Component } from 'react'
// import { Link } from 'react-router'
import Navigation from './components/Navigation'

// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

class App extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Navigation />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
