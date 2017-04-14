export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'


export function hideModal(){
  return {
    type: HIDE_MODAL,
  }
}

export function showModal(modalTypeData) {
  return {
    type: SHOW_MODAL,
    payload: {
      modalType: modalTypeData,
      modalProps: {}
    }
  }
}
