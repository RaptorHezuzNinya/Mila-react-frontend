export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const updateContact = (contactFields, contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      contactFields,
      contact
    }
  }
}

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const deleteContact = contactId => {
  return {
    type: DELETE_CONTACT,
    payload: contactId
  }
}

export const ADD_NETWORKLIST_TO_CONTACT = 'ADD_NETWORKLIST_TO_CONTACT'
export const addNetworkListToContact = (networkListId, contactId) => {
  return {
    type: ADD_NETWORKLIST_TO_CONTACT,
    payload: {
      contactId,
      networkListId
    }
  }
}

export const RM_NETWORKLIST_FROM_CONTACT = 'RM_NETWORKLIST_FROM_CONTACT'
export const rmNetworkListFromContact = (networkList, contact) => {
  return {
    type: RM_NETWORKLIST_FROM_CONTACT,
    payload: {
      networkList,
      contact
    }
  }
}
