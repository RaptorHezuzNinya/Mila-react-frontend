import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists';
import { REQUEST_CONTACTS, RECEIVE_CONTACTS } from '../actions/sortContacts';
import { undoable } from './undoableReducer';

const initialState = {
  totalSortContacts: [],
  addedContactIds: [],
};

// const initialState2 = {
//   totalSortContacts2: [],
//   addedContactIds2: [],
// };

// const soloContact = (state = initialState2, { type, payload } = {}) => {
//   switch (type) {
//     case ADD_CONTACT_TO_NETWORKLIST:
//       if (state.addedContactIds.includes(payload.contactId)) {
//         return state;
//       }
//       return {
//         addedContactIds: [...state.addedContactIds, payload.contactId],
//       }
//       return;
//     default:
//       return state;
//   }
// };

const sortContactReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_CONTACT_TO_NETWORKLIST:
      console.log('STATE in reducer', state);
      // if (state.addedContactIds.includes(payload.contactId)) {
      //   return state;
      // }
      return {
        ...state,
        addedContactIds: [...state.addedContactIds, payload.contactId],
      };
    // case REQUEST_CONTACTS :
    //   return {...state}


    case RECEIVE_CONTACTS:
      return { ...state, totalSortContacts: payload };

    default:
      return state;
  }
};

const undoableSortContactReducer = undoable(sortContactReducer);
export default undoableSortContactReducer;
