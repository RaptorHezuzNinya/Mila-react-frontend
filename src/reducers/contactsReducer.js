import { DELETE_CONTACT } from '../actions/contacts';

const initialState = {};

const contactsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case DELETE_CONTACT:
      const mappedIds = payload.map(contact => {
        return contact.id;
      });
      return state.filter(contact => mappedIds.indexOf(contact.id) === -1);

    default:
      return state;
  }
};

export default contactsReducer;
