import { UNDO, REDO } from '../actions/undoable';
import { ADD_CONTACT_TO_NETWORKLIST } from '../actions/networklists';
import { ADD_NETWORKLIST_TO_CONTACT } from '../actions/contacts';

export const undoable = reducer => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
    sortingData: reducer(undefined, {}),
  };

  return (state = initialState, action) => {
    const { past, present, future } = state;
    const sortingState = state.sortingData;

    switch (action.type) {
      case UNDO:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
          sortingData: { ...sortingState },
        };

      case REDO:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
          sortingData: { ...sortingState },
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
        console.log('state sortContactReducer', state);
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

      default:
        const newPresent = reducer(present, action);

        console.log(present, 'present', newPresent, 'newPresent');
        if (present === newPresent) {
          return state;
        }
        const neededPresent = newPresent.totalSortContacts.slice(0, 1);
        const neededFuture = newPresent.totalSortContacts.slice(1);
        return {
          past: [...past, present],
          present: neededPresent[0],
          future: neededFuture,
          sortingData: { ...newPresent },
        };
    }
  };
};
