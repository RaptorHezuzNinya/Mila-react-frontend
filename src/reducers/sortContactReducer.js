import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists'
import { CURRENT_SORT_CONTACT } from '../actions/contacts'

const initialState = {
  addedContactIds: [],
  theOneContact: []
}

export default function sortContactReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case ADD_CONTACT_TO_NETWORKLIST :
      if (state.addedContactIds.includes(payload.contactId)) {
        return state
      }
      return { ...state, addedContactIds: [...state.addedContactIds, payload.contactId] }

    case CURRENT_SORT_CONTACT:
      // newCurrentContact = Object.assign({}, payload)
      // return [newCurrentContact].concat(state)
      return {...state, theOneContact: payload}

    default:
      return state

  }
}
