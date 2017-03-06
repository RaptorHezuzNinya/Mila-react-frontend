import { combineReducers } from 'redux'

import { CREATE_CONTACTCARD } from '~/actions/contactcards'
import { CONTACTS_LOADED } from '~/actions/contactcards'

const initialState = [
  {
    contactId: 1,
    firstName: 'Adrian',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com'
  },
  {
    contactId: 2,
    firstName: 'Tanja',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com'
  }
]

export default function contactCards(state = initialState, { type, payload } = {}) {
  switch (type) {
    case CONTACTS_LOADED :
      return initialState

    case CREATE_CONTACTCARD :
      return state.contact(payload)

    default :
      return state
  }
}
