export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const updateContact = (updateContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: updateContact
  }
}

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const deleteContact = (deleteContact) => {
  return {
    type: DELETE_CONTACT,
    payload: deleteContact
  }
}
