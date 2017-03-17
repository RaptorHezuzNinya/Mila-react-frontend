import { SHOW_MODAL } from '../action/modals/show-modal'

const initialState = {
  modalType: null,
  payload: {}
}

export default function modals( state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        payload: action.payload,

      }

      break;
    default:

  }
}
