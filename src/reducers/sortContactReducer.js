import { RECEIVE_CONTACTS } from '../actions/sortContacts';
import { prevNextAble } from './prevNextAbleReducer';
import store from '../store';

const initialState = {
  totalSortContacts: [],
  addedContactIds: [],
};

const sortContactReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case RECEIVE_CONTACTS:
      console.log(payload, 'payload RECEIVE_CONTACTS');
      // add property isDeleted: false to each contact i get passed in
      const enhancedPayload = payload.map(contact => {
        return { ...contact, isDeleted: false };
      });
      console.log(enhancedPayload, 'enhancedPayload');
      return { ...state, totalSortContacts: enhancedPayload };

    default:
      console.log(state, 'STATE in sortContactReducer');
      return state;
  }
};

const undoableSortContactReducer = undoable(sortContactReducer);

export default undoableSortContactReducer;
