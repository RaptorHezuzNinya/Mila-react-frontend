import { CREATE_NETWORKLIST, UPDATE_NETWORKLIST, DELETE_NETWORKLIST } from '../actions/networklists'


const initialState = [
  {
    id: 1,
    title: 'Business',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  },
  // {
  //   id: 3,
  //   title: 'Business Int',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  // {
  //   id: 4,
  //   title: 'Friends',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  {
    id: 5,
    title: 'All',
    description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  },
]

export default function networklists(state = initialState, { type, payload } = {}) {
  switch (type) {

    case UPDATE_NETWORKLIST :
      return state.map((networklist) => {
        if (networklist.id === payload.id) {
          return Object.assign({}, payload)
        }
        return networklist
      })

    case CREATE_NETWORKLIST :
      const newNetworkList = Object.assign({}, payload)
        return [newNetworkList].concat(state)

    case DELETE_NETWORKLIST : //FIXME when api, key needs to be networklist.id
      return state.filter((networklist) => networklist.title !== payload )

    default :
      return state
  }
}
