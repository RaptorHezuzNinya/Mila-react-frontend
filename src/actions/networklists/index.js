export const CREATE_NETWORKLIST = 'CREATE_NETWORKLIST'
export const UPDATE_NETWORKLIST = 'UPDATE_NETWORKLIST'


export function createNetworkList(networkList){

  return {
    type: CREATE_NETWORKLIST,
    payload: networkList
  }
}


export function updateNetworkList(networkList){

  return {
    type: UPDATE_NETWORKLIST,
    payload: networkList
  }
}


// If you wanna stack multiple action in 1 index.js file write them like this and....
// import === import { createNetworkList } from '../actions/networklists/create'
