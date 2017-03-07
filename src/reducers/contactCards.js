import { UPDATE_CONTACTCARD } from '~/actions/contactcards/update'

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

    case UPDATE_CONTACTCARD :
      return state.map((contactCard) => {
        if (contactCard.contactId === payload.contactId) {
          return Object.assign({}, payload)
        }
        return contactCard
      })

    default :
      return state
  }
}
