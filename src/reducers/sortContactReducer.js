import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists'

const initialState = {
  addedContactIds: []
}

export default function sortContactReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case ADD_CONTACT_TO_NETWORKLIST :
      if (state.addedContactIds.includes(payload.contactId)) {
        return state
      }
      return { ...state, addedContactIds: [...state.addedContactIds, payload.contactId] }

    default:
      return state

  }
}
