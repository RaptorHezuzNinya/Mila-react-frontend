import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists'
import { REQUEST_CONTACTS, RECEIVE_CONTACTS } from '../actions/sortContacts'
import { undoable } from './undoableReducer'

const initialState = {
  contacts: [],
  addedContactIds: []
}

const sortContactReducer = (state = initialState, { type, payload } = {}) => {

  switch (type) {

    case ADD_CONTACT_TO_NETWORKLIST :
    return console.log('STATE', state)
      if (state.addedContactIds.includes(payload.contactId)) {
        return state
      }
      return { ...state, addedContactIds: [...state.addedContactIds, payload.contactId] }

      // case REQUEST_CONTACTS :
      //   return {...state}

      case RECEIVE_CONTACTS :
        console.log('sortcontact State', state)
        return {...state, contacts: payload}

    default:
      return state

  }
}

const undoableSortContactReducer = undoable(sortContactReducer)
export default undoableSortContactReducer
