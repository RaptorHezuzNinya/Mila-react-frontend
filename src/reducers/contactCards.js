import { combineReducers } from 'redux'

import { CREATE_CONTACTCARD } from '../actions/contactcards'

const initialState = [
  {
    id: 1,
    firstName: 'Adrian',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com'
  },
  {
    id: 2,
    firstName: 'Tanja',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com'
  }
]

export default function(state = initialState, { type, payload } = {}) {
  switch (type) {
    case CREATE_CONTACTCARD :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
