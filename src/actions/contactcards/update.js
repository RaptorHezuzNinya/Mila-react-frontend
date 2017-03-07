export const UPDATE_CONTACTCARD = 'UPDATE_CONTACTCARD'

export default (updateContactCard) => {
  return {
    type: UPDATE_CONTACTCARD,
    payload: updateContactCard
  }
}
