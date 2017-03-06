export const CREATE_CONTACTCARD = 'CREATE_CONTACTCARD'
export const CONTACTS_LOADED = 'CONTACTS_LOADED'

export const newContactCard = (data) => {
  return {
    type: CREATE_CONTACTCARD,
    payload: data
  }
}

export const fetchContactCards = (data) => {
  return {
    type: CONTACTS_LOADED,
    payload: data
  }
}
