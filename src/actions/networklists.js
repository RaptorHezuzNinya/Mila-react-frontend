export const CREATE_NETWORKLIST = 'CREATE_NETWORKLIST'
export const createNetworkList = (networkList) => {

  return {
    type: CREATE_NETWORKLIST,
    payload: networkList
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

// If you wanna stack multiple action in 1 index.js file write them like this and....
// import === import { createNetworkList } from '../actions/networklists/create'
