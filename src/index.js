import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
import 'normalize.css'

injectTapEventPlugin()

// Styles
import './assets/styles/main.sass'

// Routes
import routes from '~/middleware/routes'

// Components
import App from './App'
import NewContactsContainer from './newContacts/NewContactsContainer'
import Contact from './newContacts/Contact'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NewContactsContainer} />
        <Route path={routes.newContactsPath} component={NewContactsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
