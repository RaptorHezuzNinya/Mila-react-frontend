import { CREATE_NETWORKLIST, UPDATE_NETWORKLIST } from '../actions/networklists/index'


const initialState = [
  // {
  //   id: 1,
  //   title: 'Business',
  //   avatar: '~/assets/images/avatars/troll.png',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  // {
  //   id: 2,
  //   title: 'Devops',
  //   avatar: '~/assets/images/avatars/troll.png',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  // {
  //   id: 3,
  //   title: 'Business Int',
  //   avatar: '~/assets/images/avatars/troll.png',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  // {
  //   id: 4,
  //   title: 'Friends',
  //   avatar: '~/assets/images/avatars/troll.png',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
  // {
  //   id: 5,
  //   title: 'All',
  //   avatar: '~/assets/images/avatars/troll.png',
  //   description: 'The VIP list is used for people who have asked questions about our product and want to try our next update'
  // },
]

export default function networklists(state = initialState, { type, payload } = {}) {
  switch (type) {

    case UPDATE_NETWORKLIST :
      return state.map((networklist) => {
        if (networklist.listId === payload.listId) {
          return Object.assign({}, payload)
        }
        return networklist
      })

    case CREATE_NETWORKLIST :
      const newNetworkList = Object.assign({}, payload)
        return [newNetworkList].concat(state)

    default :
      return state
  }
}
