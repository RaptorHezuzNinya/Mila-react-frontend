import {
  CREATE_NETWORKLIST,
  UPDATE_NETWORKLIST,
  DELETE_NETWORKLIST,
  ADD_CONTACT_TO_NETWORKLIST,
  RM_CONTACT_FROM_NETWORKLIST
} from '../actions/networklists'

import { ADD_CONTACT_TO_DELETED } from '../actions/sortContacts'

const initialState = [
  {
    id: 1,
    title: 'Business',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
    contactIds: []
  },
  {
    id: 2,
    title: 'Business Int',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
    contactIds: []
  }
]

const networklist = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case CREATE_NETWORKLIST:
      console.log(payload, 'networklist payload')
      return {
        id: payload.id,
        title: payload.networkList.title,
        description: payload.networkList.description,
        contactIds: []
      }

    default:
      return state
  }
}

const networklists = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NETWORKLIST:
      return state.map(networklist => {
        if (networklist.id === action.payload.id) {
          return Object.assign({}, action.payload)
        }
        return networklist
      })

    case CREATE_NETWORKLIST:
      // need to refactor this so it works with json server
      // console.log(action.payload, 'networklists action.payload')
      // const newNetworkList = Object.assign({}, action.payload)
      //   return [newNetworkList].concat(state)
      return [...state, networklist(undefined, action)]

    case DELETE_NETWORKLIST: //FIXME when api, key needs to be networklist.id
      return state.filter(networklist => networklist.title !== action.payload)

    case ADD_CONTACT_TO_NETWORKLIST:
      return state.map(networkList => {
        if (networkList.id === action.payload.networkList.id) {
          let newContactIdsArray = networkList.contactIds.slice()
          newContactIdsArray.splice(0, 0, action.payload.contact.id)
          return { ...networkList, contactIds: newContactIdsArray }
        }
        return networkList
      })
    // if a user 'deletes' a contact and put the contact object in deletedSortContacts array in the sortcontact reducer we also want this ADD_CONTACT_TO_DELETED actions to delete the contact.id from the contactsIds array property in the networklist Object thats why we have this case here
    case ADD_CONTACT_TO_DELETED:
      const idCheck = state.map(networkList => {
        return networkList.contactIds.includes(action.payload.id)
      })
      if (idCheck.includes(true)) {
        const renewedObject = state.map(object => {
          const newContactIdsArray = object.contactIds.filter(id => {
            return id !== action.payload.id
          })
          return { ...object, contactIds: [...newContactIdsArray] }
        })
        return [...renewedObject]
      }
      return state

    case RM_CONTACT_FROM_NETWORKLIST:
      const updatedState = state.map(networkList => {
        if (networkList.id === action.payload.networkList.id) {
          const newContactIdsArr = networkList.contactIds.filter(contactId => {
            return contactId !== action.payload.contact.id
          })
          return { ...networkList, contactIds: [...newContactIdsArr] }
        }
        return networkList
      })
      return updatedState

    default:
      return state
  }
}

export default networklists
