import { UPDATE_NETWORKLIST } from '../actions/networklists/update'

const initialState = [
  {
    listId: 1,
    name: 'Work',
    avatar: '~/assets/images/avatars/troll.png'
  },
  {
    listId: 2,
    name: 'Devops',
    avatar: '~/assets/images/avatars/troll.png'
  },
  {
    listId: 3,
    name: 'Business Int',
    avatar: '~/assets/images/avatars/troll.png'
  },
  {
    listId: 4,
    name: 'Friends',
    avatar: '~/assets/images/avatars/troll.png'
  },
  {
    listId: 5,
    name: 'All',
    avatar: '~/assets/images/avatars/troll.png'
  },
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

    default :
      return state
  }
}
