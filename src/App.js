import React, { Component } from 'react'

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
          <h1>Hello World!</h1>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
