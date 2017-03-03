import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
import 'normalize.css'

// Styles
import './assets/styles/main.sass'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
