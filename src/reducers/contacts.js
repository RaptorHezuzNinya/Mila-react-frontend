import { UPDATE_CONTACT, DELETE_CONTACT, ADD_NETWORKLIST_TO_CONTACT } from '../actions/contacts'

import avatar from '../assets/images/avatars/user-darkgreen.svg'

const initialState = [
  {
    id: 11,
    firstName: 'Naam1',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 22,
    firstName: 'Naam2',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 13,
    firstName: 'Ward3',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 47,
    firstName: 'Andreas',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 59,
    firstName: 'Wouter',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 65,
    firstName: 'Rembert',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 71,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  {
    id: 85,
    firstName: 'Math',
    lastName: 'BlaBla',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'tanja@compainay.com',
    avatar,
    message: 'Re: FoundedX - Exclusive invitation to lead the creative society',
    networkListIds: []
  },
  // {
  //   id: 9,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 10,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 11,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 12,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 13,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 14,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 15,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 16,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 17,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 18,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 19,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 20,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 21,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 22,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 23,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 24,
  //   firstName: 'Math',
  //   lastName: 'BlaBla',
  //   companyRole: 'CEO',
  //   companyName: 'Compainay',
  //   email: 'tanja@compainay.com',
  //   avatar,
  //   message: 'Re: FoundedX - Exclusive invitation to lead the creative society'
  // },
  // {
  //   id: 25,
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
        if (contact.id === payload.id) {
          return Object.assign({}, payload)
        }
        return contact
      })
    case DELETE_CONTACT :
      const mappedIds = payload.map((contact) => {
        return contact.id
      })
      return state.filter((contact) => (mappedIds.indexOf(contact.id) === -1 ))

    case ADD_NETWORKLIST_TO_CONTACT:
    console.log(payload)
      return state.map(contact => {
        if (contact.id === payload.contactId){
          let newNetworkListIdsArray = contact.networkListIds.slice()
          newNetworkListIdsArray.splice(0, 0, payload.networkListId)
          return {...contact, networkListIds: newNetworkListIdsArray}
        }
        return contact
      })

    default :
      return state
  }
}
