export const SHOW_MODAL = 'SHOW_MODAL'

export default (showModal) => {

  return {
    type: SHOW_MODAL,
    payload: {
      modalType: {},
      modalProps: {}
    }
  }
}
