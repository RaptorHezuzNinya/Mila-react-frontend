import { SHOW_MODAL } from '../actions/modals/create-network-list-show'
import { HIDE_MODAL } from '../actions/modals/hide-modal'

const initialState = {
  modalType: null,
  modalProps: {}
}

export default function modal( state = initialState, action) {
  switch (action.type) {

    case SHOW_MODAL :
      console.log('zit nu in reducer SHOW_MODAL, loggign', action)
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      }

    case HIDE_MODAL :
      return initialState

    default:
      return state

  }
}
