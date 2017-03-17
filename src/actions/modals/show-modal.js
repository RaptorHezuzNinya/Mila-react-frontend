export const SHOW_MODAL = 'SHOW_MODAL'

export default (showModal) => {

  return {
    type: SHOW_MODAL,
    modalType: CREATE_LIST,
    payload: createList
  }
}
