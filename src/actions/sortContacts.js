import axios from 'axios'
const rootUrl = 'http://localhost:3000/'

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS'
const requestContacts = () => {
  return {
    type: REQUEST_CONTACTS,
  }
}

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
const receiveContacts = (json) => {
  return {
    type: RECEIVE_CONTACTS,
    payload: json
  }
}

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(requestContacts())
    return axios.get(`${rootUrl}contacts?_page=1&_limit=25`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
    .then((json) => dispatch(receiveContacts(json)))
  }
}
