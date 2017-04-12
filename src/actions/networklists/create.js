export const CREATE_NETWORKLIST = 'CREATE_NETWORKLIST'

export default (createNetworkList) => {
  return {
    type: CREATE_NETWORKLIST,
    payload: createNetworkList
  }
}


// If you wanna stack multiple action in 1 index.js file write them like this and....
// import === import { createNetworkList } from '../actions/networklists/create'
//
// export function createNetworkList(networkList){
//
//   return {
//     type: CREATE_NETWORKLIST,
//     payload: networkList
//   }
// }
