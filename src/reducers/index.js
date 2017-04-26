import { reducer as formReducer } from 'redux-form'

import contacts from './contacts'
import networkLists from './networklists'
import modal from './modal'
import onboarding from './onboarding'
import userReducer from './userReducer'

module.exports = {
  contacts,
  networkLists,
  modal,
  onboarding,
  user: userReducer,
  form: formReducer
}
