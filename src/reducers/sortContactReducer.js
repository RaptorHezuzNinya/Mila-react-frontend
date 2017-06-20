import { RECEIVE_CONTACTS } from '../actions/sortContacts'
import { prevNextAble } from './prevNextAbleReducer'
import store from '../store'

const initialState = {
  totalSortContacts: [],
  doneSorting: false
}

const sortContactReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case RECEIVE_CONTACTS:
      // add property isDeleted: false to each contact i get passed in
      const enhancedPayload = payload.map(contact => {
        return { ...contact, isDeleted: false }
      })
      return { ...state, totalSortContacts: enhancedPayload }

    default:
      return state
  }
}

const prevNextAbleSortContactReducer = prevNextAble(sortContactReducer)

export default prevNextAbleSortContactReducer
