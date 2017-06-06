import { UPDATE_CONTACT, DELETE_CONTACT } from '../actions/contacts';

const initialState = {
  totalContacts: [],
};

const contactsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case UPDATE_CONTACT:
      return state.map(contact => {
        if (contact.id === payload.contactId) {
          const updatedContactAttributes = payload.contactFields;
          return { ...contact, ...updatedContactAttributes };
        }
        return contact;
      });

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
