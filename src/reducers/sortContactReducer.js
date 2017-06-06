import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists';
import { REQUEST_CONTACTS, RECEIVE_CONTACTS } from '../actions/sortContacts';
import { ADD_NETWORKLIST_TO_CONTACT } from '../actions/contacts';
import { undoable } from './undoableReducer';
import store from '../store';

const initialState = {
  totalSortContacts: [],
  addedContactIds: [],
};

const sortContactReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    // case ADD_CONTACT_TO_NETWORKLIST:
    //   const customState = store.getState();
    //   console.log(customState, 'customState');
    //   const sortContactState = customState.sortContact;
    //
    //   return {
    //     ...sortContactState,
    //     sortingData: {
    //       addedContactIds: [
    //         ...sortContactState.sortingData.addedContactIds,
    //         payload.contactId,
    //       ],
    //     },
    //   };
    // case REQUEST_CONTACTS:
    //   return { ...state };

    case ADD_NETWORKLIST_TO_CONTACT:
      console.log(
        'state adsfasdfasdfasdfasdsortDFDSFSDFDSSDFDSFDSContact',
        state
      );
      if (state.id === payload.contactId) {
        let newIdArr = state.networkListIds.slice();
        newIdArr.splice(0, 0, payload.networkListId);
        return { ...state, networkListIds: newIdArr };
      }
      return state;

    case RECEIVE_CONTACTS:
      return { ...state, totalSortContacts: payload };

    default:
      console.log('IN SORTCONTACT DEFAULT');
      return state;
  }
};

const undoableSortContactReducer = undoable(sortContactReducer);
export default undoableSortContactReducer;
