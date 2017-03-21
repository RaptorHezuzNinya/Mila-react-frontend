export const HIDE_MODAL = 'HIDE_MODAL'

export default (hideModal) => {

  return {
    type: HIDE_MODAL,
    payload: {
      modalType: {},
      modalProps: {}
    }
  }
}
