export const DELETE_CONTACT = 'DELETE_CONTACT'

export default (deleteContact) => {
  return {
    type: DELETE_CONTACT,
    payload: deleteContact
  }
}
