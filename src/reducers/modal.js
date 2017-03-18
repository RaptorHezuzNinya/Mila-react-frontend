import { SHOW_MODAL } from '../actions/modals/show-modal'

const initialState = {
  modalType: null,
  modalProps: {}
}

export default function modal( state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL :
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      }

    default:
      return state

  }
}
