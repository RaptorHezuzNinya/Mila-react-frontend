import { PREV, NEXT } from '../actions/prevNextAble';
import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists';
import {
  ADD_NETWORKLIST_TO_CONTACT,
  UPDATE_CONTACT,
} from '../actions/contacts';
import {
  ADD_CONTACT_TO_DELETED,
  UNDO_ADD_CONTACT_TO_DELETED,
} from '../actions/sortContacts';

export const prevNextAble = reducer => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
    sortingData: reducer(undefined, {}),
    deletedSortContacts: [],
  };

  return (state = initialState, action) => {
    const { past, present, future, deletedSortContacts } = state;
    const sortingDataState = state.sortingData;

    switch (action.type) {
      case PREV:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
          sortingData: { ...sortingDataState },
          deletedSortContacts: [...deletedSortContacts],
        };

      case NEXT:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
          sortingData: { ...sortingDataState },
          deletedSortContacts: [...deletedSortContacts],
        };

      case ADD_CONTACT_TO_NETWORKLIST:
        if (
          state.sortingData.addedContactIds.includes(action.payload.contactId)
        ) {
          return state;
        }
        return {
          ...state,
          sortingData: {
            ...state.sortingData,
            addedContactIds: [
              ...state.sortingData.addedContactIds,
              action.payload.contactId,
            ],
          },
        };

      case ADD_NETWORKLIST_TO_CONTACT:
        if (state.present.id === action.payload.contactId) {
          let newIdArr = state.present.networkListIds.slice();
          newIdArr.splice(0, 0, action.payload.networkListId);
          return {
            ...state,
            present: {
              ...state.present,
              networkListIds: [...newIdArr],
            },
          };
          return state;
        }

      case UPDATE_CONTACT:
        if (state.present.id === action.payload.contact.id) {
          const updatedContactAttributes = action.payload.contactFields;
          return {
            ...state,
            present: {
              ...state.present,
              ...updatedContactAttributes,
            },
          };
          return state;
        }

      case ADD_CONTACT_TO_DELETED:
        return {
          ...state,
          present: { ...state.present, isDeleted: true, networkListIds: [] },
          deletedSortContacts: [...state.deletedSortContacts, action.payload],
          tempHistory: { ...state },
        };

      case UNDO_ADD_CONTACT_TO_DELETED:
        if (state.tempHistory !== undefined) {
          return { ...state.tempHistory };
        }
        console.log('return ik nu state?');
        return state;

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        const neededPresent = newPresent.totalSortContacts.slice(0, 1);
        const neededFuture = newPresent.totalSortContacts.slice(1);
        return {
          past: [...past],
          present: neededPresent[0],
          future: neededFuture,
          sortingData: { ...newPresent },
          deletedSortContacts: [],
        };
    }
  };
};
