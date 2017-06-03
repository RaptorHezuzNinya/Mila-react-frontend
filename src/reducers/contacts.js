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

export default function contacts(state = initialState, { type, payload } = {}) {
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

    case ADD_NETWORKLIST_TO_CONTACT:
      return state.totalContacts.map(contact => {
        if (contact.id === payload.contactId) {
          let newNetworkListIdsArray = contact.networkListIds.slice();
          newNetworkListIdsArray.splice(0, 0, payload.networkListId);
          return { ...contact, networkListIds: newNetworkListIdsArray };
        }
        return contact;
      });
    // case RECEIVE_CONTACTS:
    //   return { ...state, totalContacts: payload };


    default:
      return state;
  }
}
