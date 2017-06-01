import { LOADING_CONTACTS, LOADING_CONTACTS_DONE } from '../actions/loading'
import { REQUEST_CONTACTS, RECEIVE_CONTACTS } from '../actions/contacts'

export default function loadingReducer(state = false, {type} = {}) {
  switch (type) {

    case LOADING_CONTACTS :
    case REQUEST_CONTACTS :
      return true

    case LOADING_CONTACTS_DONE :
    case RECEIVE_CONTACTS :
      return false

    default:
      return state
  }
}
