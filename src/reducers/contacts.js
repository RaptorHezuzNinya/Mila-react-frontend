import { UPDATE_CONTACT } from '~/actions/contacts/update'

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

export default function contacts(state = initialState, { type, payload } = {}) {
  switch (type) {

    case UPDATE_CONTACT :
      return state.map((contact) => {
        if (contact.contactId === payload.contactId) {
          return Object.assign({}, payload)
        }
        return contact
      })

    default :
      return state
  }
}