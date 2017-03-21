export const SHOW_MODAL = 'SHOW_MODAL'

export default (modalTypeData) => {

  return {
    type: SHOW_MODAL,
    payload: {
      modalType: modalTypeData,
      modalProps: {}
    }
  }
}
