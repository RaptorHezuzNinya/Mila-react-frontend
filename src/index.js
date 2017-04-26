import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import routes from './middleware/routes'
// Components
import App from './App'
import Onboarding from './onboarding/Onboarding'
import NewContactsContainer from './newContacts/NewContactsContainer'
import Contact from './newContacts/Contact'
import NetworkContainer from './myNetwork/NetworkContainer'
import SettingsAccount from './settingsAccount/SettingsAccount'
import SettingsList from './settingsList/SettingsList'
// base styles
import './assets/styles/main.sass'
import 'normalize.css'
import './assets/styles/base/basestyles.sass'


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NetworkContainer} />
        <Route path={routes.onboardingPath} component={Onboarding} />
        <Route path={routes.newContactsPath} component={NewContactsContainer} />
        <Route path={routes.myNetworkPath} component={NetworkContainer} />
        <Route path={routes.settingsAccountPath} component={SettingsAccount} />
        <Route path={routes.settingsListPath} component={SettingsList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
