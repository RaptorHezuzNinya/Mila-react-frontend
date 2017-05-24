export const CREATE_NETWORKLIST = 'CREATE_NETWORKLIST'
let nextNWLId = 3
export const createNetworkList = (networkList) => {
  return {
    type: CREATE_NETWORKLIST,
    payload: {
      networkList,
      id: nextNWLId++
    }
  }
}

export const UPDATE_NETWORKLIST = 'UPDATE_NETWORKLIST'
export const updateNetworkList = (networkList) =>{

  return {
    type: UPDATE_NETWORKLIST,
    payload: networkList
  }
}

export const DELETE_NETWORKLIST = 'DELETE_NETWORKLIST'
export const deleteNetworkList = (id) => {
  return {
    type: DELETE_NETWORKLIST,
    payload: id
  }
}

export const ADD_CONTACT_TO_NETWORKLIST = 'ADD_CONTACT_TO_NETWORKLIST'
export const addContactToNetworklist = (contactId, networkListId) => {
  return {
    type: ADD_CONTACT_TO_NETWORKLIST,
    payload: {
      networkListId,
      contactId
    }
  }
}
