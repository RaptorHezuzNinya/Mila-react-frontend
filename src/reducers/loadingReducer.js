import { LOADING_CONTACTS, LOADING_CONTACTS_DONE } from '../actions/loading'

export default function loadingReducer(state = false, {type} = {}) {
  switch (type) {
    case LOADING_CONTACTS :
      return true
    case LOADING_CONTACTS_DONE :
      return false

    default:
      return state
  }
}
