export const CREATE_CONTACTCARD = 'CREATE_CONTACTCARD'

export default (newContactCard) => {
  return {
    type: CREATE_CONTACTCARD,
    payload: newContactCard
  }
}
