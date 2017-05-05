import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './middleware/routes'
import App from './App'
import Onboarding from './components/onboarding/Onboarding'
import SortContactContainer from './components/sortContact/SortContactContainer'
import Network from './components/myNetwork/Network'
import SettingsAccount from './components/settingsAccount/SettingsAccount'
import SettingsList from './components/settingsList/SettingsList'
import './assets/styles/main.sass'
import 'normalize.css'
import './assets/styles/base/basestyles.sass'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Network} />
        <Route path={routes.onboardingPath} component={Onboarding} />
        <Route path={routes.sortContactPath} component={SortContactContainer} />
        <Route path={routes.myNetworkPath} component={Network} />
        <Route path={routes.settingsAccountPath} component={SettingsAccount} />
        <Route path={routes.settingsListPath} component={SettingsList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
