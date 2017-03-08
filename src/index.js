import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Styles
import './assets/styles/main.sass'
import 'normalize.css'

// Routes
import routes from '~/middleware/routes'

// Components
import App from './App'
// newContacts related container & components
import NewContactsContainer from './newContacts/NewContactsContainer'
import Contact from './newContacts/Contact'
// myNetwork related container & components
import NetworkContainer from '~/myNetwork/NetworkContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NetworkContainer} />
        <Route path={routes.newContactsPath} component={NewContactsContainer} />
        <Route path={routes.myNetworkPath} component={NetworkContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
