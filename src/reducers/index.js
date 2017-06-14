import { reducer as formReducer } from 'redux-form';

import contactsReducer from './contactsReducer';
import networkLists from './networklists';
import modal from './modal';
import onboarding from './onboarding';
import userReducer from './userReducer';
import sortContactReducer from './sortContactReducer';
import loadingReducer from './loadingReducer';

module.exports = {
  form: formReducer,
  contacts: contactsReducer,
  networkLists,
  modal,
  onboarding,
  user: userReducer,
  sortContact: sortContactReducer, // this reducer is wrapped by prevNextAbleReducer
  loading: loadingReducer,
};
