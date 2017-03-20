export const SHOW_MODAL = 'SHOW_MODAL'

export default (showModal, CREATE_NETWORKLIST_MODAL) => {

  return {
    type: SHOW_MODAL,
    payload: {
      modalType: 'CREATE_NETWORKLIST_MODAL',
      modalProps: {}
    }
  }
}
