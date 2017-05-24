import { CREATE_NETWORKLIST, UPDATE_NETWORKLIST, DELETE_NETWORKLIST, ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists'


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
  },
  // {
  //   id: 4,
  //   title: 'Friends',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
  //   contactIds: []
  // },
  {
    id: 5,
    title: 'All',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update',
    contactIds: []
  },
]

export default function networklists(state = initialState, { type, payload } = {}) {
  switch (type) {

    case UPDATE_NETWORKLIST:
      return state.map((networklist) => {
        if (networklist.id === payload.id) {
          return Object.assign({}, payload)
        }
        return networklist
      })

    case CREATE_NETWORKLIST:
      const newNetworkList = Object.assign({}, payload)
        return [newNetworkList].concat(state)

    case DELETE_NETWORKLIST: //FIXME when api, key needs to be networklist.id
      return state.filter((networklist) => networklist.title !== payload )

    case ADD_CONTACT_TO_NETWORKLIST:
      return state.map(networkList => {
        if (networkList.id === payload.networkListId){
          let newContactIdsArray = networkList.contactIds.slice()
          newContactIdsArray.splice(0, 0, payload.contactId)
          return {...networkList, contactIds: newContactIdsArray}
        }
        return networkList
      })

    default :
      return state
  }
}

// case INCR_STEP_INDEX:
//   return {...state, stepIndex: payload + 1}

// zo werkt hij met boolean
// case ADD_CONTACT_TO_NETWORKLIST:
// console.log(payload)
//   return state.map(networkList => {
//     if (networkList.id === payload.networkListId){
//       return {...networkList, contactIds: payload.oneId}//Object.assign({}, networkList)
//     }
//     return networkList
//   })
