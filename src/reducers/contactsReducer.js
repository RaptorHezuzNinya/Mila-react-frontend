import {
  UPDATE_CONTACT,
  DELETE_CONTACT,
  ADD_NETWORKLIST_TO_CONTACT,
} from '../actions/contacts';
import { RECEIVE_CONTACTS } from '../actions/sortContacts';

import avatar from '../assets/images/avatars/user-darkgreen.svg';

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
    // case RECEIVE_CONTACTS:
    //   return { ...state, totalContacts: payload };


    default:
      return state;
  }
};

export default contactsReducer;
