// import chai, { expect } from 'chai'
// import networkList from './networklists'
// import deepFreeze from 'deep-freeze-node'
//
// import { CREATE_NETWORKLIST } from '../actions/networklists/create'
//
// describe('networklists', () => {
//   describe(CREATE_NETWORKLIST, () => {
//     const initialState = networkList()
//
//     initialState = deepFreeze([{ name: 'unicorn', id: 1}])
//
//     newNetworkList = deepFreeze([{ name: 'bizon', id: 2}])
//
//     const finalState =  networkList()
//
//     finalState = deepFreeze([
//         {
//           name: 'unicorn',
//           id: 1
//         },
//         {
//           name: 'bizon',
//           id: 2
//         }
//       ])
//
//     const action = deepFreeze({
//       type: CREATE_NETWORKLIST,
//       payload: newNetworkList
//     })
//     it('appends a networklist to the networklists', () => {
//       expect(networkList(initialState, action)).to.eql(finalState)
//     })
//   })
// })
