export const CREATE_NETWORKLIST = 'CREATE_NETWORKLIST'

export default (createNetworkList) => {

  return {
    type: CREATE_NETWORKLIST,
    payload: createNetworkList
  }
}
