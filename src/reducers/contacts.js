import { UPDATE_CONTACT } from '~/actions/contacts/update'
import avatar from '../assets/images/avatars/user-darkgreen.svg'

const initialState = [
  {
    contactId: 1,
    firstName: 'Adrian',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 2,
    firstName: 'Tanja',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 3,
    firstName: 'Ward',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 4,
    firstName: 'Andreas',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 5,
    firstName: 'Wouter',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 6,
    firstName: 'Rembert',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 7,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 8,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 9,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 10,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 11,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 12,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 13,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 14,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 15,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 16,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 17,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 18,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 19,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 20,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 21,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 22,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 23,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 24,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  },
  {
    contactId: 25,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
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
