export const UPDATE_CONTACT = 'UPDATE_CONTACT'

export default (updateContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: updateContact
  }
}
