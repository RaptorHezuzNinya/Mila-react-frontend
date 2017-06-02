import { reducer as formReducer } from 'redux-form'

import contacts from './contacts'
import networkLists from './networklists'
import modal from './modal'
import onboarding from './onboarding'
import userReducer from './userReducer'
import sortContactReducer from './sortContactReducer'
import loadingReducer from './loadingReducer'

module.exports = {
  form: formReducer,
  contacts,
  networkLists,
  modal,
  onboarding,
  user: userReducer,
  sortContact: sortContactReducer,
  loading: loadingReducer
}
