import { UPDATE_CONTACT } from '~/actions/contacts/update'
import { DELETE_CONTACT } from '../actions/contacts/delete'

import avatar from '../assets/images/avatars/user-darkgreen.svg'

const initialState = [
  {
    contactId: 11,
    firstName: 'Naam1',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 22,
    firstName: 'Naam2',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 13,
    firstName: 'Ward3',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 47,
    firstName: 'Andreas',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 59,
    firstName: 'Wouter',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 65,
    firstName: 'Rembert',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 71,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 85,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  // {
  //   contactId: 9,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 10,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 11,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 12,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 13,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 14,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 15,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 16,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 17,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 18,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 19,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 20,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 21,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 22,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 23,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 24,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   contactId: 25,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // }
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
    case DELETE_CONTACT :
      const mappedIds = payload.map((contact) => {
        return contact.contactId
      })
      return state.filter((contact) => (mappedIds.indexOf(contact.contactId) === -1 ))

    default :
      return state
  }
}
