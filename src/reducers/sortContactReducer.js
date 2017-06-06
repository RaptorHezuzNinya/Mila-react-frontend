import { RECEIVE_CONTACTS } from '../actions/sortContacts';
import { undoable } from './undoableReducer';
import store from '../store';

const initialState = {
  totalSortContacts: [],
  addedContactIds: [],
};

const sortContactReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case RECEIVE_CONTACTS:
      return { ...state, totalSortContacts: payload };

    default:
      return state;
  }
};

const undoableSortContactReducer = undoable(sortContactReducer);

export default undoableSortContactReducer;
