import { SHOW_MODAL } from '../actions/modals/show-modal'

const initialState = {
  modalType: null,
  payload: {}
}

export default function modal( state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL :
      return {
        modalType: action.modalType,
        payload: action.payload,
      }


    default:
      return state

  }
}
